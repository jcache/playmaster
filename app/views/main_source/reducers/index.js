import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authenticationReducer from './authentication';
import { Characters } from './characters';
import { Campaigns } from './campaigns';

const reducer = combineReducers({
  Campaigns,
  Characters,
  authenticated: authenticationReducer,
  routing: routerReducer
});

export default reducer;
