import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer,routerMiddleware, push} from 'react-router-redux';
import { browserHistory } from 'react-router'
import rootReducer from '../reducers';
import thunk from 'redux-thunk'
const initialize = {}

const configureStore = (initialState = initialize) => {

  let middleware = applyMiddleware(thunk);

  if(process.env.NODE_ENV === 'development') {
    middleware = compose(middleware);
  }

  const store = middleware(createStore)(rootReducer, initialState);  // reducers, initialState);
  return store;
};

export default configureStore
