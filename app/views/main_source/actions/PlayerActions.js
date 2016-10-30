import {
  LOAD_PLAYER,
  NEW_PLAYER
} from '../actions/types';
import PlayerController from '../models/player_data';
function LoadPlayer(player) {
  return {
    type: LOAD_PLAYER,
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

export const authenticate = (loggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: loggedIn
  };
}

export const signUp = (values) => {
  console.log('PlayerAction -- signUp: ', values);
  return {
    type: NEW_PLAYER,
    payload: {}
  }
}
