import {
  FETCH_CHARACTERS
} from '../actions/types';


export const Characters = (state = [], action ) => {
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
