'use strict';

const path = require('path');
const electron = require('electron');
const protocol = electron.protocol;
const app_path = electron.app.getPath('appData') + '/evolition_app_template/';

protocol.registerFileProtocol('ev', (request, callback) => {
    const url = request.url.substr(5);
    console.log("PROTOCOL:", path.normalize(app_path + url));
    callback({path: path.normalize(`${app_path}/${url}`)});
}, (error) => {
    if (error) console.error('Failed to register protocol');
});
