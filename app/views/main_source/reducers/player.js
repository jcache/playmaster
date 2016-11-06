import * as types from '../constants/ActionTypes';
import { NEW_PLAYER } from '../actions/types';

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
      return [
        ...state,
        players: action.players
      ]
   default:
    return state;
  }
}

// PLAYER (SINGLE) REDUCER

export const Player = (state = PlayerState, action ) => {
  action.type == 'NEW_PLAYER' ? console.log('Player -- action: ', action): null;
  switch (action.type) {
    case types.LOAD_PLAYER:
    console.log('reducers -- LOAD_PLAYERS fired!');
      return Object.assign({}, state, {
        player: action.player
      });
    case NEW_PLAYER:
    console.log('reducers -- NEW_PLAYER fired!');
      return Object.assign({}, state, {
        player: action.player
      });
   default:
    return state;
  }
}
