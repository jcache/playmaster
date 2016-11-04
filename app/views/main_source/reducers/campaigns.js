import {
  FETCH_CAMPAIGNS
} from '../actions/types';


export const Campaigns = (state = [], action ) => {
  switch (action.type) {
    case FETCH_CAMPAIGNS:
      return [
        ...state,
        ...action.payload,
      ];
   default:
    return state;
  }
}
