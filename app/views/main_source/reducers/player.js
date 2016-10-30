import * as types from '../constants/ActionTypes';

const PlayerState = {
  player: {},
};
const PlayersState = {
  players: [],
};

export const Players = (state = PlayersState, action ) => {
  switch (action.type) {
    case types.LOAD_PLAYERS:
      return Object.assign({}, state, {
        players: action.players
      });
   default:
    return state;
  }
}
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
