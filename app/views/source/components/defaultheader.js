import React from 'react';

import AppCtrl from './appctrl';
import Navigation from '../containers/navigation';
import PlayerCtrl from './playerctrl';

const DefaultHeader = (props) => {
  return (
    <div className={`ApplicationHeader header-scroll ${props.scrollingClass}`} style={props.Style} >
      <AppCtrl {...props} />
      <Navigation {...props} />
      <PlayerCtrl />
    </div>
  )
}

export default DefaultHeader
