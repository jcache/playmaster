import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authenticationReducer from './authentication';
import { Characters } from './characters';
import { Campaigns } from './campaigns';
import { Player, Players } from './player';
import { Gamesystems } from './game_systems';
import { reducer as reduxFormReducer } from 'redux-form';
const reducer = combineReducers({
  Player,
  Players,
  Campaigns,
  Characters,
  Gamesystems,
  form: reduxFormReducer,
  authenticated: authenticationReducer,
  routing: routerReducer
});

export default reducer;
