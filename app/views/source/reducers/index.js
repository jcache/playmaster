import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authenticationReducer from './authentication';

const reducer = combineReducers({
  authenticated: authenticationReducer,
  routing: routerReducer
});

export default reducer;
