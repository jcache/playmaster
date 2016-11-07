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

export function EditCharacter(character){
  return dispatch => {
    // PLAYER CONTROLLER
    CharacterController.editCharacter(character,
      ret => {
        dispatch(loadCharacters(ret));
      },
      err => {
        console.log(err);
        // DISPATCH ERROR
      }
    )
  }
}

export function CreateCharacter(character){
  return dispatch => {
    // PLAYER CONTROLLER
    CharacterController.createCharacter(character,
      ret => {
        dispatch(loadCharacters(ret));
      },
      err => {
        console.log(err);
        // DISPATCH ERROR
      }
    )
  }
}

export function LoadCharacter(id){
  return dispatch => {
    CharacterController.getCharacter(id, character => {
      dispatch(selectCharacter(character));
    })
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
