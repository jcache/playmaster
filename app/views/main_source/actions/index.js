import { CHANGE_AUTH } from './types';
import { FETCH_CHARACTERS } from './types';
import { FETCH_CAMPAIGNS } from './types';

export const authenticate = (loggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: loggedIn
  };
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

export function fetchCharacters() {
  return{
    type: FETCH_CHARACTERS,
    payload: [
      {
        id: 1,
        characerName: "Mazius Al'Ghul",
        characerProfession: "Necromancer",
        characterAvatarUri: 'images/rogue.jpg'
      },
      {
        id: 2,
        characerName: "Peter Parker",
        characerProfession: "Sorcerer",
        characterAvatarUri: 'images/spiderman.jpg'
      },
      {
        id: 3,
        characerName: "Mazius Al'Ghul",
        characerProfession: "Psionic",
        characterAvatarUri: 'images/rogue.jpg'
      },
      {
        id: 4,
        characerName: "Mazius Al'Ghul",
        characerProfession: "Bio-Wizard",
        characterAvatarUri: 'images/rogue.jpg'
      },
      {
        id: 5,
        characerName: "Mazius Al'Ghul",
        characerProfession: "Cleaner",
        characterAvatarUri: 'images/rogue.jpg'
      },
      {
        id: 6,
        characerName: "Mazius Al'Ghul",
        characerProfession: "Janitor",
        characterAvatarUri: 'images/rogue.jpg'
      },
    ]
  }
}
