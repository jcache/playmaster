import {
  LOAD_PLAYER,
  LOAD_PLAYERS,
  NEW_PLAYER
} from '../actions/types';
import PlayerController from '../models/player_data';

const LoadPlayerAction = {
  type: LOAD_PLAYER,
  player: {}
}

const LoadPlayersAction = {
  type: LOAD_PLAYERS,
  players: []
}

const NewPlayerAction = {
  type: NEW_PLAYER,
  player: {}
}

export function CreatePlayer(player){
  return dispatch => {
    // PLAYER CONTROLLER
    PlayerController.createPlayer(player, data => {
      dispatch({...NewPlayerAction, player: data });
    })
  }
}
export const CollectPlayer = (id) => {
  return dispatch => {
    // PLAYER CONTROLLER
    PlayerController.getPlayer(id, data => {
      dispatch({...LoadPlayerAction, player: data})
    })
  }
}

const LoadPlayers = (id) => {
  return dispatch => {
    // PLAYER CONTROLLER
    PlayerController.getPlayers(data => {
      dispatch({...LoadPlayersAction, players: data})
    })
  }
}
export { LoadPlayers };

const authenticate = (loggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: loggedIn
  };
}
export {authenticate};
