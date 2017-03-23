import path from 'path';

const APP_NAME = 'Playmaster';
const APP_TEAM = 'Evolition, LLC';
const APP_TEAM_URL = 'https://evolition.io';
const APP_GIT_URL = 'https://github.com/evolition/playmaster/';
const APP_VERSION = require('../package.json').version;

module.exports = {
  APP_COPYRIGHT: 'Copyright © 2015-2017 ' + APP_TEAM,
  ROOT_PATH: path.join(__dirname, '../app'),
  APP_NAME: APP_NAME,
  APP_TEAM: APP_TEAM,
  APP_ICON: path.join(__dirname, '..', 'static', 'Playmaster'),
  APP_VERSION: APP_VERSION,
  APP_WINDOW_TITLE: APP_NAME + ' (ALPHA)',
  GITHUB_URL: APP_GIT_URL,
  GITHUB_URL_ISSUES: APP_GIT_URL + 'issues',
  GITHUB_URL_RAW: 'https://raw.githubusercontent.com/evolition/playmaster/master',
  HOME_PAGE_URL: APP_TEAM_URL,
}
