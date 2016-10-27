import * as types from '../constants/ActionTypes';

function LoadGameSystems(game_systems) {
  return {
    type: types.LOAD_GAME_SYSTEMS,
    game_systems: game_systems
  }
}

export function CollectGameSystems(){
  var game_systems = [
    {
      id: 1,
      gameSystemName: "Dungeons & Dragons"
    }
  ];
  return dispatch => {
    dispatch(LoadGameSystems(game_systems))
  }
}
