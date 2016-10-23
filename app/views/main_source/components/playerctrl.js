import React from 'react';
import {
  IoIosSearchStrong, IoIosGear, IoChevronLeft
} from 'react-icons/lib/io';
import { Link } from 'react-router';

const PlayerCtrl = () => {
  return (
    <ul className={`AppControlUtils`}>
      <li className="SearchIcon"><a href="#"><IoIosSearchStrong/></a></li>
      <li className="SettingsIcon">
        <a href="#" onClick={() => { alert('called modal')}}><IoIosGear /></a>
      </li>
      <li className="ProfileDropdown">
        <a href="#"><button>Sign In</button></a>
      </li>
      <li className="ProfileBn dropdown-content"><a href="#"><IoChevronLeft /></a></li>
    </ul>
  )
}

export default PlayerCtrl
