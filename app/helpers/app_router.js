'use strict';
const path = require('path');
const electron = require('electron');
const fs = require('fs-extra');
const character_data = {"characters": []};
const player_data = {"player":[]};
const player_preferences = {"player_preferences": []};
const device_settings = {"device_settings": []};

class Route {

  constructor() {
    this.app_data_path = electron.app.getPath('appData') + '/evolition_app_template/data/';
    this.app_plugin_path = electron.app.getPath('appData') + '/evolition_app_template/plugins/';
  }

  getAppDataPath() {
    return this.app_data_path;
  }

  checkOrCreateFile(path, file, context ){
    fs.ensureFile(path, (err) => {
      if (err) return console.error(err)
      console.log(`[${context}] Successfully Loaded`);
      // file has now been created, including the directory it is to be placed in
    })
  }

  loadCharacterDB() {
    const context = "CHARACTER_MODEL"
    const srcpath = this.app_data_path;
    const path = `${srcpath}characters.json`;
    // console.log('seed data: ' , file);
    this.checkOrCreateFile(path, character_data, context);
    // IF THE character.json FILE WAS NEVER CREATED, CREATE IT
  }

  loadPlayerDB() {
    const context = "PLAYER_MODEL"
    const srcpath = this.app_data_path;
    const path = `${srcpath}players.json`;
    // console.log('seed data: ' , file);
    this.checkOrCreateFile(path, player_data, context);
    // IF THE character.json FILE WAS NEVER CREATED, CREATE IT
  }

  loadPlayerDefaultsDB() {
    const context = "PLAYER_MODELS"
    const srcpath = this.app_data_path;
    const player_preferences_path = `${srcpath}player_preferences.json`;
    const device_settings_path = `${srcpath}device_settings.json`;
    // console.log('seed data: ' , file);
    this.checkOrCreateFile(player_preferences_path, player_preferences, context);
    this.checkOrCreateFile(device_settings_path, device_settings, context);
    // IF THE character.json FILE WAS NEVER CREATED, CREATE IT
  }
}

export const AppRouter = new Route();
