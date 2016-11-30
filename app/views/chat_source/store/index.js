import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware';

export default function configureStore(initialState = {}){
  let middleWare = [thunk, promiseMiddleware()];
  let store;

  if (process.env.NODE_ENV === 'development') {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(...middleWare),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    ));
  } else {
    store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleWare), f => f));
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
