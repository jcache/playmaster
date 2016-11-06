import React from 'react';
import {
  IoClose, IoPlus, IoMinus
} from 'react-icons/lib/io';

const AppCtrl = ({onCloseApp, onMaximizeToggle, onMinimizeToggle, ipc}) => {
  return (
    <ul className={`AppControl`}>
      <li><a onClick={() => onCloseApp()} ><IoClose/></a></li>
      <li><a onClick={() => onMaximizeToggle()} ><IoPlus/></a></li>
      <li><a onClick={() => onMinimizeToggle()} ><IoMinus/></a></li>
    </ul>
  )
}

export default AppCtrl
