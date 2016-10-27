import React from 'react';
import {Route, IndexRoute } from 'react-router';

import App from './';
import requireAuth from './containers/RequireAuth.js';
import DefaultView from './containers/DefaultView';
import mainOverlay from './containers/mainOverlay';
import CharacterView from './containers/CharacterView';
import CampaignView from './containers/CampaignView';
import GameSystem from './containers/GameSystemView';
import Settings from './containers/SettingsView';
import CreateProfile from './containers/CreateProfileView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CreateProfile} />
    <Route path="create_profile" component={CreateProfile} />
    <Route path="players" component={DefaultView} />
    <Route path="gamesystems" component={GameSystem} />
    <Route path="characters" component={requireAuth(CharacterView)} />
    <Route path="campaigns" component={requireAuth(CampaignView)} />
    <Route path="players" component={DefaultView} />
    <Route path="player/:id" component={requireAuth(DefaultView)} >
      <Route path="friends" component={DefaultView} />
      <Route path="chat" component={DefaultView} />
      <Route path="settings" component={SettingsView} />
    </Route>

    <Route path="settings" component={Settings} ></Route>
    <Route path="character/:id" component={DefaultView}>
      <Route path="inventory" component={DefaultView}>
        <Route path="item/:id" component={DefaultView}>
        </Route>
      </Route>
    </Route>
  </Route>
);
