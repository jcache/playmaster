import React from 'react';

import AppCtrl from './appctrl';
import Navigation from '../containers/Navigation';
import PlayerCtrl from './playerctrl';

const DefaultHeader = (props) => {
  return (
    <div className={`ApplicationHeader header-scroll ${props.scrollingClass}`} style={props.Style} >
      <AppCtrl {...props} />
      <Navigation {...props} />
      <PlayerCtrl {...props}/>
    </div>
  )
}

export default DefaultHeader
