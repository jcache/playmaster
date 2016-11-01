import path from 'path';
import { ipcRenderer, ipcMain, remote } from 'electron';
import low from 'lowdb';
import _ from 'lodash';
import uuid from 'uuid';

const dataPath = ipcRenderer.sendSync('config-paths');
const ApplicationDataPath = path.resolve(dataPath, 'application.json');
const db = low(ApplicationDataPath);
const App = db.get('application');

export default {
  // GET PLAYERS BLOB
  getAppData(cb) {
    const AllPlayers = Players.value();
    // console.log(`[All Players] -> `, AllPlayers);
    cb(AllPlayers);
  },
}
