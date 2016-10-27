import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authenticationReducer from './authentication';
import { Characters } from './characters';
import { Campaigns } from './campaigns';
import { Gamesystems } from './game_systems';

const reducer = combineReducers({
  Campaigns,
  Characters,
  Gamesystems,
  authenticated: authenticationReducer,
  routing: routerReducer
});

export default reducer;
