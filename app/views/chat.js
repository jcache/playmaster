import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from './chat_source/routes';
import ChatView from './chat_source/containers/ChatView';
import configureStore from './chat_source/store';
const appHistory = useRouterHistory(createHashHistory)();
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory} routes={routes} />
  </Provider>
, document.getElementById('chat-root'));
