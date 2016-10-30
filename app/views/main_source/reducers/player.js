import * as types from '../constants/ActionTypes';

const PlayerState = {
  player: {},
};

export const Player = (state = PlayerState, action ) => {
  switch (action.type) {
    case types.LOAD_PLAYER:
      return Object.assign({}, state, {
        player: action.player
      });
   default:
    return state;
  }
}
