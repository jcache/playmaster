import path from 'path';
import { ipcRenderer, ipcMain, remote } from 'electron';
import low from 'lowdb';
import _ from 'lodash';
import uuid from 'uuid';

const dataPath = ipcRenderer.sendSync('config-paths');
const CharactersDataPath = path.resolve(dataPath, 'character.json');
const db = low(CharactersDataPath);
const Characters = db.get('character');

export default {
  // CREATES PLAYER RESOURCE
  createCharacter(pid, character, ret, err) {
    const newId = uuid(); // => e.g. bab303e3-6705-4164-b4f5-83e6092275e1
    // const newCharacter = new Character(character); // <- JSON IS RETURNED
    const newCharacter = _.assign({id: newId} , character)// <- JSON IS RETURNED
    try {
      Characters.push(newCharacter).value().id;
      const AllCharacters = Characters.filter({pid: pid}).value();
      ret(AllCharacters);
    } catch (e) {
      err(e);
    }
  },

  // GET PLAYERS BLOB
  getCharacters(pid, cb) {
    const AllCharacters = Characters.filter({pid: pid}).value();
    cb(AllCharacters);
  },
  // GET PLAYERS BLOB
  editCharacter(character, ret, err) {
    try {
      Characters.find({id: character.id}).assign(character).value();
      const AllCharacters = Characters.filter({pid: character.pid}).value();
      ret(AllCharacters);
    } catch (e) {
      err(e);
    }
  },
  // GET PLAYERS BLOB
  getCharacter(id, cb) {
    const Character = Characters.filter({id: id}).value();
    cb(Character[0]);
  },

  // GET PLAYERS BLOB
  getFirstCharacter(id, cb) {
    const Character = Characters.filter({pid: id}).take(1).value();
    cb(Character[0]);
  },
}
