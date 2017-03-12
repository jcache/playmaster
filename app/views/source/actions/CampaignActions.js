import * as types from '../constants/ActionTypes';

function LoadCampaigns(campaigns) {
  return {
    type: types.LOAD_CAMPAIGNS,
    campaigns: campaigns
  }
}


export function CollectCampaigns(){
  var campaigns = [
    {
      id: 1,
      campaignName: "The Mazius Campaign",
      charactersInGame: [1,4,5,6],
      campaignBannerUri: 'images/galaxy.png'
    },
    {
      id: 3,
      campaignName: "Another Campaign",
      charactersInGame: [2,3],
      campaignBannerUri: 'images/galaxy.png'
    },
  ];

  return dispatch => {
    dispatch(LoadCampaigns(campaigns))
  }
}
