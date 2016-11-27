'use strict';
const path = require('path');
const electron = require('electron');
const fs = require('fs-extra');

import low from 'lowdb';
import _ from 'lodash';
class Route {
  constructor() {
    this.app_data_path = electron.app.getPath('appData') + '/evolition_app_template/data/';
    this.app_plugin_path = electron.app.getPath('appData') + '/evolition_app_template/plugins/';
    this.app_asset_path = electron.app.getPath('appData') + '/evolition_app_template/assets/';
  }

  getAppDataPath() {
    return this.app_data_path;
  }

  initDatabases(databases) {
    databases.map((database)=> {
      const srcpath = `${this.getAppDataPath()}${database}.json`;
      fs.ensureFile(srcpath, (err) => {

        if (err) return console.error(err);
        const db = low(srcpath);

        if(!db.has(database).value()) {
          db.set(database, []).value();
        };
      });
    });
  }

  saveAsset(path_toFile, newContext,  filename, newFileName) {
    const srcpath = this.app_asset_path + newContext;
    // console.log(`injected_filename: ` , filename.replace(/\.[^/.]+$/, ""));
    const fileArr = filename.split(".")
    const newFile = `${srcpath}${newFileName}.${fileArr[1]}`;
    const assetpath = `ev://assets/${newContext}${newFileName}.${fileArr[1]}`;
    try {
      fs.copySync(path.resolve(path_toFile), newFile);
    } catch (err) {
      console.log(err)
    }
    return assetpath;
  }
}

export const AppRouter = new Route();
