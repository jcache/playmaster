import * as types from '../constants/ActionTypes';

const CharacterState = {
  characters: [],
};

export const Characters = (state = CharacterState, action ) => {
  switch (action.type) {
    case types.LOAD_CHARACTERS:
      return Object.assign({}, state, {
        characters: action.characters
      });
   default:
    return state;
  }
}
