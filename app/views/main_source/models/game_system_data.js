import path from 'path';
import { ipcRenderer, ipcMain, remote } from 'electron';
import low from 'lowdb';
import _ from 'lodash';
import uuid from 'uuid';

const dataPath = ipcRenderer.sendSync('config-paths');
const GameSystemDataPath = path.resolve(dataPath, 'game_system.json');
const db = low(GameSystemDataPath);
const GameSystems = db.get('game_system');

export default {
  // GET PLAYERS BLOB
  getGameSystems(cb) {
    const AllGameSystems = GameSystems.value();
    cb(AllGameSystems);
  },

}
