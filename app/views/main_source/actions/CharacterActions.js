import * as types from '../constants/CharacterActionTypes';
import CharacterController from '../models/character_data';

function loadCharacters(characters) {
  return {
    type: types.LOAD_CHARACTERS,
    characters: characters
  }
}
function selectCharacter(character) {
  return {
    type: types.SELECT_CHARACTER,
    selected_character: character
  }
}

export function CreateCharacter(character){
  return dispatch => {
    // PLAYER CONTROLLER
    CharacterController.createCharacter(character,
      ret => {
        dispatch(LoadCharacters(ret));
      },
      err => {
        console.log(err);
        // DISPATCH ERROR
      }
    )
  }
}

export function LoadCharacters(pid){
  return dispatch => {
    CharacterController.getCharacters(pid, characters => {
      dispatch(selectCharacter(characters[0]));
      dispatch(loadCharacters(characters));
    })
  }
}
