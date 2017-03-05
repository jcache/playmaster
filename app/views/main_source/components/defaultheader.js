import React from 'react';

import AppCtrl from './appctrl';
import PlayerCtrl from './playerctrl';

const DefaultHeader = (props) => {
  const _renderPlayerCtrl = () => <PlayerCtrl {...props} />
  return (
    <div className={`ApplicationHeader header-scroll small`} >
      <AppCtrl {...props} />
      {props.authenticated ? _renderPlayerCtrl() : null }
    </div>
  )
}

export default DefaultHeader
