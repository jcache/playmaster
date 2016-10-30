import {
  FETCH_CHARACTERS,
  SELECT_CHARACTER
} from '../actions/types';


export function Characters(state = [], action )  {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return [
        ...state,
        ...action.payload,
      ];
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
