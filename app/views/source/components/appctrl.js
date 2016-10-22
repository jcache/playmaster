import React from 'react';
import {
  IoClose, IoPlus, IoMinus
} from 'react-icons/lib/io';

const AppCtrl = ({onCloseApp, onMaximizeToggle, onMinimizeToggle, ipc}) => {
  function onCloseApp() {
    ipc.send('app_close');
  }
  return (
    <ul className={`AppControl`}>
      <li><a onClick={() => onCloseApp()} href="#"><IoClose/></a></li>
      <li><a onClick={() => onMaximizeToggle()} href="#"><IoPlus/></a></li>
      <li><a onClick={() => onMinimizeToggle()} href="#"><IoMinus/></a></li>
    </ul>
  )
}

export default AppCtrl
