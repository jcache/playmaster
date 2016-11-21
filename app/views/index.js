import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router , hashHistory} from 'react-router';
import configureStore from './main_source/store/configureStore';
import routes from './main_source/routes';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store)
ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        {require('./main_source/routes')}
      </Router>
    </Provider>
    , document.getElementById('react-root')
);
