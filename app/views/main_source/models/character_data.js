import path from 'path';
import { ipcRenderer, ipcMain, remote } from 'electron';
import low from 'lowdb';
import _ from 'lodash';
import uuid from 'uuid';

const dataPath = ipcRenderer.sendSync('config-paths');
const CharactersDataPath = path.resolve(dataPath, 'characters.json');
const db = low(CharactersDataPath);
const Characters = db.get('character');

export default {
  // CREATES PLAYER RESOURCE
  createCharacter(character,ret,err) {
    const newId = uuid(); // => e.g. bab303e3-6705-4164-b4f5-83e6092275e1
    // const newCharacter = new Character(character); // <- JSON IS RETURNED
    const newCharacter = _.assign({id: newId} , character)// <- JSON IS RETURNED
    try {
      Characters.push(newCharacter).value().id;
      const AllCharacters = Characters.value();
      ret(AllCharacters);
    } catch (e) {
      err(e);
    }
  },
}
