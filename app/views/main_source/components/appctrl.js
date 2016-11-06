import React from 'react';
import {
  IoClose, IoPlus, IoMinus
} from 'react-icons/lib/io';

const AppCtrl = ({onCloseApp, onMaximize, onMinimize, ipc}) => {
  return (
    <ul className={`AppControl`}>
      <li><a onClick={() => onCloseApp()} ><IoClose/></a></li>
      <li><a onClick={() => onMaximize()} ><IoPlus/></a></li>
      <li><a onClick={() => onMinimize()} ><IoMinus/></a></li>
    </ul>
  )
}

export default AppCtrl
