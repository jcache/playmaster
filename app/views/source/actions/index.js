import {
  CHANGE_AUTH,
  FETCH_CHARACTERS,
  FETCH_CAMPAIGNS,
  SELECT_CHARACTER
} from './types';

export const authenticate = (loggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: loggedIn
  };
}

export function selectCharacter(characterId) {
  return {
    type: SELECT_CHARACTER,
    payload: characterId
  }
}

export function fetchCampaigns() {
  return{
    type: FETCH_CAMPAIGNS,
    payload: [
      {
        id: 1,
        campaignName: "The Mazius Campaign",
        charactersInGame: [1,4,5,6], // ENUM FTW
        campaignBannerUri: 'images/galaxy.png'
      },
      {
        id: 3,
        campaignName: "Another Campaign",
        charactersInGame: [2,3], // ENUM FTW
        campaignBannerUri: 'images/galaxy.png'
      },
    ]
  }
}
