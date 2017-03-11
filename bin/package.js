#!/usr/bin/env node

// # https://nodejs.org/api/child_process.html
import cp from 'child_process';

import pkg from '../package.json';
import rimraf from 'rimraf';
import path from 'path';
import config from '../src/config';

const DIST_MAC_PATH = path.join(config.ROOT_PATH, 'dist/mac');
const DIST_WIN_PATH = path.join(config.ROOT_PATH, 'dist/win');
const DIST_PATH = path.join(config.ROOT_PATH, 'dist');

const build = () => {
  console.log("Re-Installing Node Modules");
  cp.execSync('yarn install', { stdio: 'inherit' });

  console.log('Removing Mac Distribution Paths...');
  rimraf.sync(DIST_MAC_PATH);

  console.log('Removing Windows Distribution Paths...');
  rimraf.sync(DIST_WIN_PATH);

  console.log('Removing Distribution Paths...');
  rimraf.sync(DIST_PATH);
}

build();

// # https://github.com/feross/webtorrent-desktop/blob/master/bin/package.js
// # https://www.toptal.com/javascript/interview-questions
// # https://blog.dcpos.ch/how-to-make-your-electron-app-sexy
