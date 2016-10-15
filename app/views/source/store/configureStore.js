import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, push} from 'react-router-redux';
import rootReducer from '../reducers';

const initialize = {}

const configureStore = (initialState = initialize) => {

  let middleware = applyMiddleware();

  if(process.env.NODE_ENV === 'development') {
    middleware = compose(middleware);
  }

  const store = middleware(createStore)(rootReducer, initialState);  // reducers, initialState);
  return store;
};

export default configureStore
