
import * as types from '../constants/PlayerActionTypes';
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
      dispatch({...NewPlayerAction, player: data });
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

export function LoadPlayers() {
  return dispatch => {
    // PLAYER CONTROLLER
    PlayerController.getPlayers(data => {
      dispatch(loadPlayers(data))
    })
  }
}

const authenticate = (loggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: loggedIn
  };
}
export {authenticate};
