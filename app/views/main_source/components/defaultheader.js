import React from 'react';

import AppCtrl from './appctrl';
import Navigation from '../containers/Navigation';
import PlayerCtrl from './playerctrl';

const DefaultHeader = (props) => {
  const _renderNavigation = (props) => {
    return (
      <Navigation {...props} />
    )
  }

  const _renderPlayerCtrl = (props) => {
    return (
      <PlayerCtrl {...props} />
    )
  }

  return (
    <div className={`ApplicationHeader header-scroll ${props.scrollingClass}`} style={props.Style} >
      <AppCtrl {...props} />
      {props.authenticated ? _renderNavigation(props) : null }
      {props.authenticated ? _renderPlayerCtrl(props) : null }
    </div>
  )
}

export default DefaultHeader
