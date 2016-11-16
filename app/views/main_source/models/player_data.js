import path from 'path';
import { ipcRenderer, ipcMain, remote } from 'electron';
import low from 'lowdb';
import _ from 'lodash';
import uuid from 'uuid';

const dataPath = ipcRenderer.sendSync('config-paths');
const PlayersDataPath = path.resolve(dataPath, 'players.json');
const db = low(PlayersDataPath);
const Players = db.get('player');

export default {
  // CREATES PLAYER RESOURCE
  createPlayer(player,cb) {
    const newId = uuid(); // => e.g. bab303e3-6705-4164-b4f5-83e6092275e1
    // const newPlayer = new Player(player); // <- JSON IS RETURNED
    const newPlayer = _.assign({id: uuid()} , player)// <- JSON IS RETURNED
    Players.push(newPlayer).value();
    const AllPlayers = Players.value();
    cb(AllPlayers);
  },
  // GET SINGLE RESOURCE
  getPlayer(id,cb) {
    const player = Players.find({id: id}).value();
    cb(player);
  },
  // GET PLAYERS BLOB
  getPlayers(cb) {
    const AllPlayers = Players.value();
    console.log(`[All Players] -> `, AllPlayers);
    cb(AllPlayers);
  },
}
