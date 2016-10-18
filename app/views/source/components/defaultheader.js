import React from 'react';

import AppCtrl from './appctrl';
import Navigation from './navigation';
import PlayerCtrl from './playerctrl';

const DefaultHeader = ({
  Style,
  scrollingClass,
  onCloseApp,
  onMaximizeToggle,
  onMinimizeToggle
}) => {
  return (
    <div className={`ApplicationHeader header-scroll ${scrollingClass}`} style={Style}>
      <AppCtrl onCloseApp={onCloseApp} onMaximizeToggle={onMaximizeToggle} onMinimizeToggle={onMinimizeToggle}  />
      <Navigation />
      <PlayerCtrl />
    </div>
  )
}

export default DefaultHeader
