import path from 'path';

const APP_NAME = 'Playmaster';
const APP_TEAM = 'Evolition, LLC';
const APP_VERSION = require('../package.json').version;

module.exports = {
  APP_COPYRIGHT: 'Copyright © 2015-2017 ' + APP_TEAM,
  ROOT_PATH: path.join(__dirname, '..'),
}
