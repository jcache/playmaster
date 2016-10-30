import {
  LOAD_CHARACTERS
} as types from '../actions/types';

function LoadCharacters(characters) {
  return {
    type: LOAD_CHARACTERS,
    characters: characters
  }
}


export function CollectCharacters(){
  var characters = [
    {
      id: 1,
      characerName: "Mazius Al'Ghul",
      characerProfession: "Necromancer",
      characterAvatarUri: 'images/rogue.jpg',
      campaign: 1
    },
    {
      id: 2,
      characerName: "Peter Parker",
      characerProfession: "Sorcerer",
      characterAvatarUri: 'images/spiderman.jpg',
      campaign: 1
    },
    {
      id: 3,
      characerName: "Mazius Al'Ghul",
      characerProfession: "Psionic",
      characterAvatarUri: 'images/rogue.jpg',
      campaign: 4
    },
    {
      id: 4,
      characerName: "Overlord",
      characerProfession: "Bio-Wizard",
      characterAvatarUri: 'images/rogue.jpg',
      campaign: 5
    },
    {
      id: 5,
      characerName: "Mazius Al'Ghul",
      characerProfession: "Cleaner",
      characterAvatarUri: 'images/rogue.jpg',
      campaign: null
    },
    {
      id: 6,
      characerName: "Mazius Al'Ghul",
      characerProfession: "Janitor",
      characterAvatarUri: 'images/rogue.jpg',
      campaign: null
    },
  ];
  return dispatch => {
    dispatch(LoadCharacters(characters))
  }
}
