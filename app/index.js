const path = require('path');

if (process.env.NODE_ENV === 'development') {
  var appRoot = path.join(__dirname, '..');
} else {
  var appRoot = path.join(__dirname);
}

require('electron-compile').init(appRoot, './entry', false);
