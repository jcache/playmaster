import React from 'react';

import AppCtrl from './appctrl';
import {Navigation} from './navigation';
import PlayerCtrl from './playerctrl';

const DefaultHeader = (props) => {
  const _renderNavigation = () => <Navigation {...props} />
  const _renderPlayerCtrl = () => <PlayerCtrl {...props} />
  return (
    <div className={`ApplicationHeader header-scroll small`} >
      <AppCtrl {...props} />
      {props.authenticated ? _renderNavigation() : null }
      {props.authenticated ? _renderPlayerCtrl() : null }
    </div>
  )
}

export default DefaultHeader
