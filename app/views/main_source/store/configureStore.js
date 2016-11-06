import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer,routerMiddleware, push} from 'react-router-redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk'
import Evolition_DnD5e from '../gamesystems/dnd5e';

const initialize = {}

const configureStore = (initialState = initialize) => {

  let middleware = applyMiddleware(thunk, Evolition_DnD5e);

  if(process.env.NODE_ENV === 'development') {
    middleware = compose(middleware);
  }
  const store = middleware(createStore)(rootReducer, initialState);  // reducers, initialState);
  return store;
};

export default configureStore
