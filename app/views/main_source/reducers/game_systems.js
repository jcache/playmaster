import * as types from '../constants/ActionTypes';

const GamesystemState = {
  game_systems: [],
};

export const Gamesystems = (state = GamesystemState, action ) => {
  switch (action.type) {
    case types.LOAD_GAME_SYSTEMS:
      return Object.assign({}, state, {
        game_systems: action.game_systems
      });
   default:
    return state;
  }
}
