'use strict';

import { spawn } from 'child_process';
import electron from 'electron-prebuilt';
import browserSync from 'browser-sync';

// BrowserSync
import browserSyncConnectUtils from 'browser-sync/lib/connect-utils';
const Bsync = browserSync.create();
var historyApiFallback = require('connect-history-api-fallback');


const getRootUrl = (options) => {
  const port = options.get('port');
  return `http://localhost:${port}`;
};

const getMainUrl = (options) => {
  const pathname = browserSyncConnectUtils.clientScript(options);
  console.log(getRootUrl(options) + pathname);
  return getRootUrl(options) + pathname;
};

const BrowserSyncOPTS = {
  ui: false,
  ghostMode: true,
  open: true, // false
  notify: false,
  logPrefix: 'playmaster',
  logSnippet: false,
  logLevel: 'info',
  middleware: [
    historyApiFallback()
  ],
  socket: { domain: getRootUrl }
};

// NODE ENVIRONMENT
const args = process.argv.length > 2 ? process.argv: false;
if (args) {
	let dev = args.indexOf('development');
	let prod = args.indexOf('production');
	if (dev || prod) {
		process.env.NODE_ENV == dev ? dev: prod;
	}
}

Bsync.init(BrowserSyncOPTS, (err, bs) => {

  // ERRORS
  if (err) return console.error(err);

  // SPAWN
  spawn(electron, ['.'], {
    stdio: 'inherit',
    env: {
      ...{
        NODE_ENV: 'development',
        BROWSER_SYNC_MAIN_URL: getMainUrl(bs.options),
      },
      ...process.env,
    },
  });

  // WATCH
  Bsync.watch([
      'app/entry.js',
      'app/**/*.js',
      'app/**/*.jsx',
      'app/**/*.less',
      'app/**/*.html'
    ]).on('change', Bsync.reload);
});
