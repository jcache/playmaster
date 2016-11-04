import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './main_source/store/configureStore';
import routes from './main_source/routes';

const store = configureStore();
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const history = syncHistoryWithStore(appHistory, store);
ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
    , document.getElementById('react-root')
);
