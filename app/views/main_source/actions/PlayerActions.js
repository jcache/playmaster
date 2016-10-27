import * as types from '../constants/ActionTypes';
import PlayerController from '../models/player_data';
function LoadPlayer(player) {
  return {
    type: types.LOAD_PLAYER,
    player: player
  }
}

export function CollectPlayer(){
  return dispatch => {
    // PLAYER CONTROLLER
    PlayerController.getPlayer(data => {
      dispatch(LoadPlayer(data))
    })
  }
}
