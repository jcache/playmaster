import * as types from '../constants/ActionTypes';

function LoadCharacters(characters) {
  return {
    type: types.LOAD_CHARACTERS,
    characters: characters
  }
}


export function CollectCharacters(){
  var characters = [
    {
      id: 1,
      characerName: "Mazius Al'Ghul",
      characerProfession: "Necromancer",
      characterAvatarUri: 'images/rogue.jpg'
    },
    {
      id: 2,
      characerName: "Peter Parker",
      characerProfession: "Sorcerer",
      characterAvatarUri: 'images/spiderman.jpg'
    },
    {
      id: 3,
      characerName: "Mazius Al'Ghul",
      characerProfession: "Psionic",
      characterAvatarUri: 'images/rogue.jpg'
    },
    {
      id: 4,
      characerName: "Mazius Al'Ghul",
      characerProfession: "Bio-Wizard",
      characterAvatarUri: 'images/rogue.jpg'
    },
    {
      id: 5,
      characerName: "Mazius Al'Ghul",
      characerProfession: "Cleaner",
      characterAvatarUri: 'images/rogue.jpg'
    },
    {
      id: 6,
      characerName: "Mazius Al'Ghul",
      characerProfession: "Janitor",
      characterAvatarUri: 'images/rogue.jpg'
    },
  ];
  return dispatch => {
    dispatch(LoadCharacters(characters))
  }
}
