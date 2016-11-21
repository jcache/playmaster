'use strict';
const path = require('path');
const electron = require('electron');
const fs = require('fs-extra');
const character_data = {"character": []};
const player_data = {"player":[]};
const conversation_data = {"conversation":[]};
const game_system_data = {"game_system":[]};
const player_preferences = {"player_preference": []};
const device_settings = {"device_setting": []};

class Route {
  constructor() {
    this.app_data_path = electron.app.getPath('appData') + '/evolition_app_template/data/';
    this.app_plugin_path = electron.app.getPath('appData') + '/evolition_app_template/plugins/';
    this.app_asset_path = electron.app.getPath('appData') + '/evolition_app_template/assets/';
  }

  getAppDataPath() {
    return this.app_data_path;
  }

  checkOrCreateFile(path, file, context ){
    console.log(path, file);
    fs.ensureFile(path, (err) => {
      if (err) return console.error(err)
      console.log(`[${context}] Successfully Loaded`);
      // file has now been created, including the directory it is to be placed in
    })
  }

  loadConversationDB() {
    const context = "CONVERSATION_MODEL"
    const srcpath = this.app_data_path;
    const path = `${srcpath}conversations.json`;
    // console.log('seed data: ' , file);
    this.checkOrCreateFile(path, conversation_data, context);
  }
  loadGameSystemDB() {
    const context = "GAME_SYSTEM_MODEL"
    const srcpath = this.app_data_path;
    const path = `${srcpath}game_systems.json`;
    // console.log('seed data: ' , file);
    this.checkOrCreateFile(path, game_system_data, context);
  }
  loadCharacterDB() {
    const context = "CHARACTER_MODEL"
    const srcpath = this.app_data_path;
    const path = `${srcpath}characters.json`;
    // console.log('seed data: ' , file);
    this.checkOrCreateFile(path, character_data, context);
  }

  loadPlayerDB() {
    const context = "PLAYER_MODEL"
    const srcpath = this.app_data_path;
    const path = `${srcpath}players.json`;
    // console.log('seed data: ' , file);
    this.checkOrCreateFile(path, player_data, context);
  }

  loadPlayerDefaultsDB() {
    const context = "PLAYER_MODELS"
    const srcpath = this.app_data_path;
    const player_preferences_path = `${srcpath}player_preferences.json`;
    const device_settings_path = `${srcpath}device_settings.json`;
    // console.log('seed data: ' , file);
    this.checkOrCreateFile(player_preferences_path, player_preferences, context);
    this.checkOrCreateFile(device_settings_path, device_settings, context);
  }

  saveAsset(path_toFile,newContext,  filename){
    const srcpath = this.app_asset_path + newContext;
    const newFile = `${srcpath}${filename}`;
    const assetpath = `ev://assets/${newContext}${filename}`;
    console.log(assetpath);
    fs.copySync(path.resolve(path_toFile), newFile);

    return assetpath;
  }
}

export const AppRouter = new Route();
