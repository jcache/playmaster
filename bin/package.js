#!/usr/bin/env node

// # https://nodejs.org/api/child_process.html
import cp from 'child_process';
import fs from 'fs';
import electronPackager from 'electron-packager';
import pkg from '../package.json';
import rimraf from 'rimraf';
import path  from 'path';
import config from '../src/config';
import series from 'run-series';
import zip from 'cross-zip';
import minimist from 'minimist';
import os from 'os';

const DIST_MAC_PATH = path.join(config.ROOT_PATH, 'dist/mac');
const DIST_WIN_PATH = path.join(config.ROOT_PATH, 'dist/win');
const BUILD_NAME = config.APP_NAME + '-v' + config.APP_VERSION;
const BUILD_PATH = path.join(config.ROOT_PATH, 'build');
const DIST_PATH = path.join(config.ROOT_PATH, '../dist');
const NODE_MODULES_PATH = path.join(config.ROOT_PATH, 'node_modules');

const argv = minimist(process.argv.slice(2), {
  boolean: [
    'sign'
  ],
  default: {
    package: 'all',
    sign: false
  },
  string: [
    'package'
  ]
})

const build = () => {
  console.log('Reinstalling node_modules...')
  rimraf.sync(NODE_MODULES_PATH);
  console.log("Re-Installing Node Modules");
  cp.execSync('yarn install', { stdio: 'inherit' });
  console.log('Removing Mac Distribution Paths...');
  rimraf.sync(DIST_MAC_PATH);
  console.log('Removing Windows Distribution Paths...');
  rimraf.sync(DIST_WIN_PATH);
  console.log('Removing Distribution Paths...');
  rimraf.sync(DIST_PATH);
  // cp.execSync('yarn run build', { NsODE_ENV: 'production', stdio: 'inherit' });
  console.log('Creating Project');
  const { platform } = process;
  if (platform === 'darwin') {
    buildDarwin(printDone)
  } else if (platform === `win32`){
    buildWin32(printDone)
  }
}

const all = {
  'app-copyright': config.APP_COPYRIGHT,
  'app-version': pkg.version,
  'build-version': '0.0.0',
  asar: {
    unpack: 'Playmaster*'
  },

  dir: config.ROOT_PATH,
  ignore: /^\/src|^\/dist|\/(appveyor.yml|\.appveyor.yml|\.github|appdmg|AUTHORS|CONTRIBUTORS|bench|benchmark|benchmark\.js|bin|bower\.json|component\.json|coverage|doc|docs|docs\.mli|dragdrop\.min\.js|example|examples|example\.html|example\.js|externs|ipaddr\.min\.js|Makefile|min|minimist|perf|rusha|simplepeer\.min\.js|simplewebsocket\.min\.js|static\/screenshot\.png|test|tests|test\.js|tests\.js|webtorrent\.min\.js|\.[^/]*|.*\.md|.*\.markdown)$/,
  name: config.APP_NAME,
  out: DIST_PATH,
  overwrite: true,
  prune: false,
  electronVersion: require('electron/package.json').version
}

const win32 = {
  platform: 'win32',
  arch: ['ia32', 'x64'],
  win32metadata: {
    CompanyName: config.APP_NAME,
    FileDescription: config.APP_NAME,
    OriginalFilename: config.APP_NAME + '.exe',
    ProductName: config.APP_NAME,
    InternalName: config.APP_NAME
  },
  icon: config.APP_ICON + '.ico'
}

const darwin = {
  platform: 'darwin',
  arch: 'x64',
}

build()

function buildDarwin(cb) {
  console.log('Mac: Packaging electron...');

  electronPackager(Object.assign({}, all, darwin), (err, buildPath) => {
    console.log(`buildpath`,buildPath)
    if (err) {
      return cb(err)
    };
    console.log('Mac: Packaged electron. ' + buildPath)

    const appPath = path.join(buildPath[0], config.APP_NAME + '.app')
    const contentsPath = path.join(appPath, 'Contents')
    const resourcesPath = path.join(contentsPath, 'Resources')

    console.log(`apppath: `,appPath);
    console.log(`contentsPath: `,contentsPath);
    console.log(`resourcesPath: `,resourcesPath);

    // Copy torrent file icon into app bundle
    // cp.execSync(`cp ${config.APP_FILE_ICON + '.icns'} ${resourcesPath}`)

    if (process.platform === 'darwin') {
      if (argv.sign) {
        signApp(function (err) {
          if (err) return cb(err)
          pack(cb)
        })
      } else {
        printWarning()
        pack(cb)
      }
    } else {
      printWarning()
    }

    function signApp (cb) {
      const sign = require('electron-osx-sign')

      /*
       * Sign the app with Apple Developer ID certificates. We sign the app for 2 reasons:
       *   - So the auto-updater (Squirrrel.Mac) can check that app updates are signed by
       *     the same author as the current version.
       *   - So users will not a see a warning about the app coming from an "Unidentified
       *     Developer" when they open it for the first time (Mac Gatekeeper).
       *
       * To sign an Mac app for distribution outside the App Store, the following are
       * required:
       *   - Xcode
       *   - Xcode Command Line Tools (xcode-select --install)
       *   - Membership in the Apple Developer Program
       */

      const signOpts = {
        app: appPath,
        platform: 'darwin',
        verbose: true
      }

      console.log('Mac: Signing app...')
      sign(signOpts, function (err) {
        if (err) return cb(err)
        console.log('Mac: Signed app.')
        cb(null)
      })
    }

    function pack (cb) {
      packageZip() // always produce .zip file, used for automatic updates

      if (argv.package === 'dmg' || argv.package === 'all') {
        packageDmg(cb)
      }
    }

    function packageZip () {
      // Create .zip file (used by the auto-updater)
      console.log('Mac: Creating zip...')

      const inPath = path.join(buildPath[0], config.APP_NAME + '.app')
      const outPath = path.join(DIST_PATH, BUILD_NAME + '-darwin.zip')
      zip.zipSync(inPath, outPath)

      console.log('Mac: Created zip.')
    }

    function packageDmg (cb) {
      console.log('Mac: Creating dmg...')

      const appDmg = require('appdmg')

      const targetPath = path.join(DIST_PATH, BUILD_NAME + '.dmg')
      rimraf.sync(targetPath)

      // Create a .dmg (Mac disk image) file, for easy user installation.
      const dmgOpts = {
        basepath: config.ROOT_PATH,
        target: targetPath,
        specification: {
          title: config.APP_NAME,
          icon: config.APP_ICON + '.icns',
          // background: path.join(config.STATIC_PATH, 'appdmg.png'),
          'icon-size': 128,
          contents: [
            { x: 122, y: 240, type: 'file', path: appPath },
            { x: 380, y: 240, type: 'link', path: '/Applications' },
            // Hide hidden icons out of view, for users who have hidden files shown.
            // https://github.com/LinusU/node-appdmg/issues/45#issuecomment-153924954
            { x: 50, y: 500, type: 'position', path: '.background' },
            { x: 100, y: 500, type: 'position', path: '.DS_Store' },
            { x: 150, y: 500, type: 'position', path: '.Trashes' },
            { x: 200, y: 500, type: 'position', path: '.VolumeIcon.icns' }
          ]
        }
      }

      const dmg = appDmg(dmgOpts)
      dmg.once('error', cb)
      dmg.on('progress', function (info) {
        if (info.type === 'step-begin') console.log(info.title + '...')
      })
      dmg.once('finish', function (info) {
        console.log('Mac: Created dmg.')
        cb(null)
      })
    }
  })
}

function buildWin32 (cb) {
  const installer = require('electron-winstaller')
  console.log('Windows: Packaging electron...')

  /*
   * Path to folder with the following files:
   *   - Windows Authenticode private key and cert (authenticode.p12)
   *   - Windows Authenticode password file (authenticode.txt)
   */
  let CERT_PATH
  try {
    fs.accessSync('D:')
    CERT_PATH = 'D:'
  } catch (err) {
    CERT_PATH = path.join(os.homedir(), 'Desktop')
  }

  electronPackager(Object.assign({}, all, win32), function (err, buildPath) {
    if (err) return cb(err)
    console.log('Windows: Packaged electron. ' + buildPath)

    let signWithParams
    if (process.platform === 'win32') {
      if (argv.sign) {
        const certificateFile = path.join(CERT_PATH, 'authenticode.p12')
        const certificatePassword = fs.readFileSync(path.join(CERT_PATH, 'authenticode.txt'), 'utf8')
        const timestampServer = 'http://timestamp.comodoca.com'
        signWithParams = `/a /f "${certificateFile}" /p "${certificatePassword}" /tr "${timestampServer}" /td sha256`
      } else {
        printWarning()
      }
    } else {
      printWarning()
    }

    const tasks = []
    buildPath.forEach(function (filesPath) {
      const destArch = filesPath.split('-').pop()

      if (argv.package === 'exe' || argv.package === 'all') {
        tasks.push((cb) => packageInstaller(filesPath, destArch, cb))
      }
      if (argv.package === 'portable' || argv.package === 'all') {
        tasks.push((cb) => packagePortable(filesPath, destArch, cb))
      }
    })
    series(tasks, cb)

    function packageInstaller (filesPath, destArch, cb) {
      console.log(`Windows: Creating ${destArch} installer...`)

      const archStr = destArch === 'ia32' ? '-ia32' : ''

      installer.createWindowsInstaller({
        appDirectory: filesPath,
        authors: config.APP_TEAM,
        description: config.APP_NAME,
        exe: config.APP_NAME + '.exe',
        iconUrl: config.GITHUB_URL_RAW + '/static/' + config.APP_NAME + '.ico',
        loadingGif: path.join(config.STATIC_PATH, 'loading.gif'),
        name: config.APP_NAME,
        noMsi: true,
        outputDirectory: DIST_PATH,
        productName: config.APP_NAME,
        /**
         * Only create delta updates for the Windows x64 build because 90% of our
         * users have Windows x64 and the delta files take a *very* long time to
         * generate. Also, the ia32 files on GitHub have non-standard Squirrel
         * names (i.e. RELEASES-ia32 instead of RELEASES) and so Squirrel won't
         * find them unless we proxy the requests.
         */
        // TODO: Re-enable Windows 64-bit delta updates when we confirm that they
        //       work correctly in the presence of the "ia32" .nupkg files. I
        //       (feross) noticed them listed in the 64-bit RELEASES file and
        //       manually edited them out for the v0.17 release. Shipping only
        //       full updates for now will work fine, with no ill-effects.
        // remoteReleases: destArch === 'x64'
        //   ? config.GITHUB_URL
        //   : undefined,
        /**
         * If you hit a "GitHub API rate limit exceeded" error, set this token!
         */
        // remoteToken: process.env.WEBTORRENT_GITHUB_API_TOKEN,
        setupExe: config.APP_NAME + 'Setup-v' + config.APP_VERSION + archStr + '.exe',
        setupIcon: config.APP_ICON + '.ico',
        signWithParams: signWithParams,
        title: config.APP_NAME,
        usePackageJson: false,
        version: pkg.version
      })
      .then(function () {
        console.log(`Windows: Created ${destArch} installer.`)

        /**
         * Delete extraneous Squirrel files (i.e. *.nupkg delta files for older
         * versions of the app)
         */
        fs.readdirSync(DIST_PATH)
          .filter((name) => name.endsWith('.nupkg') && !name.includes(pkg.version))
          .forEach((filename) => {
            fs.unlinkSync(path.join(DIST_PATH, filename))
          })

        if (destArch === 'ia32') {
          console.log('Windows: Renaming ia32 installer files...')

          // RELEASES -> RELEASES-ia32
          const relPath = path.join(DIST_PATH, 'RELEASES-ia32')
          fs.renameSync(
            path.join(DIST_PATH, 'RELEASES'),
            relPath
          )

          // WebTorrent-vX.X.X-full.nupkg -> WebTorrent-vX.X.X-ia32-full.nupkg
          fs.renameSync(
            path.join(DIST_PATH, `${config.APP_NAME}-${config.APP_VERSION}-full.nupkg`),
            path.join(DIST_PATH, `${config.APP_NAME}-${config.APP_VERSION}-ia32-full.nupkg`)
          )

          // Change file name inside RELEASES-ia32 to match renamed file
          const relContent = fs.readFileSync(relPath, 'utf8')
          const relContent32 = relContent.replace('full.nupkg', 'ia32-full.nupkg')
          fs.writeFileSync(relPath, relContent32)

          if (relContent === relContent32) {
            // Sanity check
            throw new Error('Fixing RELEASES-ia32 failed. Replacement did not modify the file.')
          }

          console.log('Windows: Renamed ia32 installer files.')
        }

        cb(null)
      })
      .catch(cb)
    }

    function packagePortable (filesPath, destArch, cb) {
      console.log(`Windows: Creating ${destArch} portable app...`)

      const portablePath = path.join(filesPath, 'Portable Settings')
      mkdirp.sync(portablePath)

      const downloadsPath = path.join(portablePath, 'Downloads')
      mkdirp.sync(downloadsPath)

      const tempPath = path.join(portablePath, 'Temp')
      mkdirp.sync(tempPath)

      const archStr = destArch === 'ia32' ? '-ia32' : ''

      const inPath = path.join(DIST_PATH, path.basename(filesPath))
      const outPath = path.join(DIST_PATH, BUILD_NAME + '-win' + archStr + '.zip')
      zip.zipSync(inPath, outPath)

      console.log(`Windows: Created ${destArch} portable app.`)
      cb(null)
    }
  })
}


function printDone (err) {
  if (err) console.error(err.message || err)
}

/*
 * Print a large warning when signing is disabled so we are less likely to accidentally
 * ship unsigned binaries to users.
 */
function printWarning () {
  console.log(fs.readFileSync(path.join(__dirname, 'warning.txt'), 'utf8'))
}
