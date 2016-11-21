import * as types from '../constants/GameSystemActionTypes';
import GameSystemController from '../models/game_system_data';

function loadGameSystems(game_systems) {
  return {
    type: types.LOAD_GAME_SYSTEMS,
    game_systems: game_systems
  }
}

export function LoadGameSystems(){
  return dispatch => {
    GameSystemController.getGameSystems(game_systems => {
      dispatch(loadGameSystems(game_systems));
    })
  }
}
