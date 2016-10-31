import React from 'react';
import {Route, IndexRoute } from 'react-router';

import App from './';
import requireAuth from './containers/RequireAuth.js';
import DefaultView from './containers/DefaultView';
import Dashboard from './containers/Dashboard';
import PlayerFrame from './containers/PlayerFrame';
import CharacterView from './containers/CharacterView';
import CampaignView from './containers/CampaignView';
import GameSystem from './containers/GameSystemView';
import Settings from './containers/SettingsView';
import CreateProfile from './containers/CreateProfileView';
import LoginSelect from './containers/LoginSelectView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginSelect} />
    <Route path="create_player" component={CreateProfile} />

    /* DEFAULT PLAYER ROUTE = DASHBOARD (` /player/1 `) */
    
    <Route path="player/:id" component={requireAuth(PlayerFrame)} >
      <IndexRoute component={Dashboard}/>
      <Route path="gamesystems" component={GameSystem}/>
      <Route path="characters" component={CharacterView} />
      <Route path="settings" component={Settings} />
      <Route path="campaigns" component={CampaignView} />
    </Route>

    {/*
      <Route path="step_two" component={Dashboard} />
      <Route path="dashboard" component={DefaultView} />
      <Route path="character/:id" component={DefaultView}>
        <Route path="inventory" component={DefaultView}>
          <Route path="item/:id" component={DefaultView}>
          </Route>
        </Route>
      </Route>
    */}

  </Route>
);
