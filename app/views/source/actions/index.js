import {
  CHANGE_AUTH
} from './types';

export function authenticate(loggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: loggedIn
  };
}
