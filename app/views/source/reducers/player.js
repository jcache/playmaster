import * as types from '../constants/PlayerActionTypes';

const PlayerState = {
  player: {},
};

const PlayersState = {
  players: [],
};

// PLAYERS REDUCER
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

// PLAYER (SINGLE) REDUCER

export const Player = (state = PlayerState, action ) => {
  switch (action.type) {
    case types.LOAD_AUTH_STATUS:
      return Object.assign({}, state, {
        authenticated: action.authenticated
      });
    case types.LOAD_PLAYER:
      return Object.assign({}, state, {
        player: action.player
      });
   default:
    return state;
  }
}
