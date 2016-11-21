import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';
import { hashHistory } from 'react-router';
import thunk from 'redux-thunk'
import Evolition_DnD5e from '../gamesystems/dnd5e';




export default function configureStore(initialState = {}){

  let middleWare = applyMiddleware(thunk, Evolition_DnD5e);

  if(process.env.NODE_ENV === 'development') {
    middleWare = compose(middleWare);
  }

  const store = middleWare(createStore)(
    rootReducer,
    initialState
  );  // reducers, initialState);

  return store;
};
