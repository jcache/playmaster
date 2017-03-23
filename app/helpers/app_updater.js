'use strict';
const { autoUpdater } = require('electron');
const appVersion = require('../package.json').version;
const os = require('os').platform();
const feedURL = 'http://get.evolition.io/playmaster/';
// if (process.env.NODE_ENV === 'production') {
//   autoUpdater.setFeedURL(feedURL);
//   autoUpdater.checkForUpdates();
// }



console.log(os, appVersion)
