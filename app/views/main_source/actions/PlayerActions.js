import * as types from '../constants/ActionTypes';
import PlayerController from '../models/player_data';

function LoadPlayer(player) {
  return {
    type: types.LOAD_PLAYER,
    player: player
  }
}

function LoadPlayers(players) {
  return {
    type: types.LOAD_PLAYERS,
    players: players
  }
}

export function CollectPlayer(id){
  return dispatch => {
    // PLAYER CONTROLLER
    PlayerController.getPlayer(id, data => {
      dispatch(LoadPlayer(data))
    })
  }
}

export function CollectPlayers(){
  return dispatch => {
    PlayerController.getPlayers(data => {
      dispatch(LoadPlayers(data))
    })
  }
}
