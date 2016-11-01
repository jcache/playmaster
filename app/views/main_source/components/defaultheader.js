import React from 'react';

import AppCtrl from './appctrl';
import Navigation from '../containers/Navigation';
import PlayerCtrl from './playerctrl';

const DefaultHeader = (props) => {
  const _renderNavigation = () => {
    return (
      <Navigation {...props} />
    )
  }

  const _renderPlayerCtrl = () => {
    return (
      <PlayerCtrl {...props} />
    )
  }

  return (
    <div className={`ApplicationHeader header-scroll small`} >
      <AppCtrl {...props} />
      {props.authenticated ? _renderNavigation() : null }
      {props.authenticated ? _renderPlayerCtrl() : null }
    </div>
  )
}

export default DefaultHeader
