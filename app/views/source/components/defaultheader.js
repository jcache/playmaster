import React from 'react';

import AppCtrl from './appctrl';
import Navigation from './navigation';
import PlayerCtrl from './playerctrl';

const DefaultHeader = ({Style, scrollingClass}) => {
  return (
    <div className={`ApplicationHeader header-scroll ${scrollingClass}`} style={Style}>
      <AppCtrl />
      <Navigation />
      <PlayerCtrl />
    </div>
  )
}

export default DefaultHeader
