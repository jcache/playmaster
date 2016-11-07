import * as types from '../constants/ActionTypes';
import PlayerController from '../models/player_data';

function loadPlayer(player) {
  return {
    type: types.LOAD_PLAYER,
    player: player
  }
}

function loadPlayers(players) {
  return {
    type: types.LOAD_PLAYERS,
    players: players
  }
}

export function CreatePlayer(player){
  return dispatch => {
    // PLAYER CONTROLLER
    PlayerController.createPlayer(player, data => {
      dispatch(LoadPlayers(data));
    })
  }
}
export function LoadPlayer(id){
  return dispatch => {
    // PLAYER CONTROLLER
    PlayerController.getPlayer(id, data => {
      dispatch(loadPlayer(data))
    })
  }
}

export function CollectPlayers(){
  return dispatch => {
    PlayerController.getPlayers(data => {
      dispatch(loadPlayers(data))
    })
  }
}
