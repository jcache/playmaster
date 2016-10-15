import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
  routing: routerReducer
});

export default reducer
