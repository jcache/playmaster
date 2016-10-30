import {
  CHANGE_AUTH,
  NEW_PLAYER
} from '../actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    case NEW_PLAYER:
      return player => {
        return state;
      }
    default:
    return state;
  }
}
