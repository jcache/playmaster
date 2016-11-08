import * as types from '../constants/CharacterActionTypes';


const CharacterState = {
  selected_character: {},
};

const CharactersState = {
  characters: [],
};

// CHARACTER REDUCER
export const Character = (state = CharacterState, action ) => {
  switch (action.type) {
    case types.SELECT_CHARACTER:
      return Object.assign({}, state, {
        selected_character: action.selected_character
      });
   default:
    return state;
  }
}

// CHARACTERS
export const Characters = (state = CharactersState, action ) => {
  switch (action.type) {
    case types.LOAD_CHARACTERS:
      return Object.assign({}, state, {
        characters: action.characters
      });
   default:
    return state;
  }
}

export function SelectedCharacter(state = 1, action ) {
  switch (action.type) {
    case SELECT_CHARACTER:
      return action.payload;
   default:
    return state;
  }
}
