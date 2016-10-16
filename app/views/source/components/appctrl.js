import React from 'react';
import {
  IoClose, IoPlus, IoMinus
} from 'react-icons/lib/io';

const AppCtrl = () => {
  return (
    <ul className={`AppControl`}>
      <li><a href="#"><IoClose/></a></li>
      <li><a href="#"><IoPlus/></a></li>
      <li><a href="#"><IoMinus/></a></li>
    </ul>
  )
}

export default AppCtrl
