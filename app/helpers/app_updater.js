'use strict';
const { autoUpdater } = require('electron');
const appVersion = require('../package.json').version;
const os = require('os').platform();
const feedURL = `https://get.evolition.io/playmaster/download/version/${appVersion}/${os}`;
console.log(feedURL)
// if (process.env.NODE_ENV === 'production') {
  autoUpdater.setFeedURL(feedURL);
  autoUpdater.checkForUpdates();
// }



console.log(os, appVersion)
