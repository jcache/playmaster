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
      'app/**/*.less',
      'app/**/*.jsx',
      'app/**/*.html'
    ]).on('change', Bsync.reload);
});
