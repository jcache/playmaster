import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authenticationReducer from './authentication';
import { Characters, SelectedCharacter } from './characters';
import { Campaigns } from './campaigns';
import { Player, Players } from './player';
import { Gamesystems } from './game_systems';
import { reducer as reduxFormReducer } from 'redux-form';

// console.log('reducer: ',SelectedCharacter());
const reducer = combineReducers({
  Player,
  Players,
  Campaigns,
  Gamesystems,
  Characters,
  form: reduxFormReducer,
  authenticated: authenticationReducer,
  SelectedCharacter: SelectedCharacter,
  routing: routerReducer
});

export default reducer;
