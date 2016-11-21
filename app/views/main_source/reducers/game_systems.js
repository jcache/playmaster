import * as types from '../constants/GameSystemActionTypes';

const GameSystemState = {
  game_systems: [],
};

export const GameSystems = (state = GameSystemState, action ) => {
  switch (action.type) {
    case types.LOAD_GAME_SYSTEMS:
      return Object.assign({}, state, {
        game_systems: action.game_systems
      });
   default:
    return state;
  }
}
