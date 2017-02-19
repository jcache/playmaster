import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './';
import requireAuth from './containers/RequireAuth.js';
import Dashboard from './containers/Dashboard';
import PlayerFrame from './containers/PlayerFrame';
import CharacterFrame from './containers/CharacterFrame';
import CharactersView from './containers/CharactersView';
import CharacterView from './containers/CharacterView';
import CharacterEditView from './containers/CharacterEditView';
import CharacterCreateView from './containers/CharacterCreateView';
import CampaignView from './containers/CampaignView';
import GameSystem from './containers/GameSystemView';
import Settings from './containers/SettingsView';
import PlayerCreateView from './containers/PlayerCreateView';
import PlayerEditView from './containers/PlayerEditView';
import LoginSelect from './containers/LoginSelectView';

const NotFound = () => <h1>404.. This page is not found!</h1>

module.exports =
  <Route path="/" component={App}>
    <IndexRoute component={LoginSelect} />
    <Route path="create_player" component={PlayerCreateView} />

    /* DEFAULT PLAYER ROUTE = DASHBOARD (` /player/1 `) */

    <Route path="player/:id" component={requireAuth(PlayerFrame)} >
      <IndexRoute component={Dashboard} />
      <Route path="profile" component={PlayerEditView} />
      <Route path="gamesystems" component={GameSystem} />
      <Route path="characters" component={CharactersView} />
      <Route path="settings" component={Settings} />
      <Route path="campaigns" component={CampaignView} />
      <Route path="character/new" component={CharacterCreateView} />
      <Route path="character/:cid" component={CharacterFrame}>
        <IndexRoute component={CharacterView} />
        <Route path="edit" component={CharacterEditView} />
      </Route>
    </Route>
    <Route path='*' component={NotFound} />
  </Route>
;
