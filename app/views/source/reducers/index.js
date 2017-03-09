import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authenticationReducer from './authentication';
import { Character, Characters } from './characters';
import { Campaigns } from './campaigns';
import { Conversations } from './conversations';
import { Player, Players } from './player';
import { GameSystems } from './game_systems';
import { reducer as reduxFormReducer } from 'redux-form';

// console.log('reducer: ',SelectedCharacter());
const reducer = combineReducers({
  Player,
  Players,
  Conversations,
  Campaigns,
  Character,
  Characters,
  GameSystems,
  Characters,
  form: reduxFormReducer,
  authenticated: authenticationReducer,
  // SelectedCharacter: SelectedCharacter,
  routing: routerReducer
});

export default reducer;
