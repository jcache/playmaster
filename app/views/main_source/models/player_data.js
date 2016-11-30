import path from 'path';
import { ipcRenderer, ipcMain, remote } from 'electron';
import low from 'lowdb';
import _ from 'lodash';
import uuid from 'uuid';

const dataPath = ipcRenderer.sendSync('config-paths');
const PlayersDataPath = path.resolve(dataPath, 'player.json');
const db = low(PlayersDataPath);
const Players = db.get('player');

export default {
  // CREATES PLAYER RESOURCE
  createPlayer(player, cb) {
    const newId = uuid(); // => e.g. bab303e3-6705-4164-b4f5-83e6092275e1

    // const newPlayer = new Player(player); // <- JSON IS RETURNED
    const newPlayer = _.assign({ id: uuid(), authenticated: false }, player );
    Players.push(newPlayer).value();
    const AllPlayers = Players.value();
    cb(AllPlayers);
  },

  // GET SINGLE RESOURCE
  getPlayer(id, cb) {
    const player = Players.find({ id: id }).value();
    cb(player);
  },

  setAuthenticationStatus(id, val, cb) {
    let player = Players.find({ id: id }).value();
    try {
      player.authenticated = val;
    } catch (e) {
      alert(e);
    }

    cb(player.authenticated);
  },

  getAuthenticationStatus(id, cb) {
    let player = Players.find({ id: id }).value();
    // alert(player);
    cb(player.authenticated);
  },

  // GET PLAYERS BLOB
  editPlayer(player, cb) {
    console.log('edit player');
    const RETplayer = Players.find({ id: player.id }).assign(player).value();

    // console.log(`RETURN PLAYER`, RETplayer);
    ipcRenderer.send('update_avatar', RETplayer.avatar_uri);
    cb(RETplayer);
  },

  // GET PLAYERS BLOB
  getPlayers(cb) {
    const AllPlayers = Players.value();
    cb(AllPlayers);
  },
};
