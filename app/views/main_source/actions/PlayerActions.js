import * as types from '../constants/ActionTypes';
import PlayerController from '../models/player_data';
function LoadPlayer(player) {
  return {
    type: types.LOAD_PLAYER,
    player: player
  }
}

export function CollectPlayer(player){
  return dispatch => {
    // PLAYER CONTROLLER
    PlayerController.getPlayer(player, data => {
      dispatch(LoadPlayer(data))
    })
  }
}
