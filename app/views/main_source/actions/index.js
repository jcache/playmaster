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
        characterName: "Mazius Al'Ghul",
        characterProfession: "Necromancer",
        characterAvatarUri: 'images/rogue.jpg'
      },
      {
        id: 2,
        characterName: "Peter Parker",
        characterProfession: "Sorcerer",
        characterAvatarUri: 'images/spiderman.jpg'
      },
      {
        id: 3,
        characterName: "Mazius Al'Ghul",
        characterProfession: "Psionic",
        characterAvatarUri: 'images/rogue.jpg'
      },
      {
        id: 4,
        characterName: "Mazius Al'Ghul",
        characterProfession: "Bio-Wizard",
        characterAvatarUri: 'images/rogue.jpg'
      },
      {
        id: 5,
        characterName: "Mazius Al'Ghul",
        characterProfession: "Cleaner",
        characterAvatarUri: 'images/rogue.jpg'
      },
      {
        id: 6,
        characterName: "Mazius Al'Ghul",
        characterProfession: "Janitor",
        characterAvatarUri: 'images/rogue.jpg'
      },
    ]
  }
}
