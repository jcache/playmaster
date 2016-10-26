import React from 'react';
import {Route, IndexRoute } from 'react-router';
import requireAuth from './containers/RequireAuth.js';
import DefaultView from './containers/DefaultView';
import CharacterView from './containers/CharacterView';
import CampaignView from './containers/CampaignView';
import GameSystemView from './containers/GameSystemView';
import SettingsView from './containers/SettingsView';
import DefaultViewAuth from './containers/DefaultViewAuth';
import ApplicationFrame from './containers/ApplicationFrame';

const App = (props) => {
  return (
    <ApplicationFrame>
      {props.children}
    </ApplicationFrame>
  )
}
export default (
  <Route path="/" component={App}>
    <IndexRoute component={DefaultView} />
    <Route path="players" component={DefaultView} />
    <Route path="gamesystems" component={GameSystemView} />
    <Route path="characters" component={requireAuth(CharacterView)} />
    <Route path="campaigns" component={requireAuth(CampaignView)} />


    <Route path="player/:id" component={DefaultView} >
      <Route path="friends" component={DefaultView} />
      <Route path="chat" component={DefaultView} />
      <Route path="settings" component={DefaultView} />
    </Route>

    <Route path="settings" component={SettingsView} ></Route>
    <Route path="character/:id" component={DefaultView}>
      <Route path="inventory" component={DefaultView}>
        <Route path="item/:id" component={DefaultView}>
        </Route>
      </Route>
    </Route>
  </Route>
);
