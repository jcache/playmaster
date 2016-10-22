import * as types from '../constants/ActionTypes';

const CampaignState = {
  campaigns: [],
};

export const Campaigns = (state = CampaignState, action ) => {
  switch (action.type) {
    case types.LOAD_CAMPAIGNS:
      return Object.assign({}, state, {
        campaigns: action.campaigns
      });
   default:
    return state;
  }
}
