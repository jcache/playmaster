import React from 'react';
import { IoIosSearchStrong, IoIosGear, IoChevronLeft } from 'react-icons/lib/io';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router';
import {findDOMNode} from 'react-dom';

const PlayerCtrl = (props) => {
  let { router } = props;
  return (
    <div style={{flex:1, display: 'flex'}} >
      <ul className={`AppControlUtils`}>

        <li className="SearchIcon">
          <a href="#"><IoIosSearchStrong/></a>
        </li>

        <li className="ProfileDropdown">
          <Link data-tip data-for='campaigns' ></Link>
        </li>

        <li className="SettingsIcon">
          <Link to={`settings`}><IoIosGear /></Link>
        </li>

        <li className="ProfileBn dropdown-content">
          <span>...</span>
        </li>

      </ul>
      <ReactTooltip class='tooltip characterPrefPane' id='campaigns' event='click' delayHide={10} place="bottom" delayShow={1}  effect="solid">
        <ul onMouseLeave={() => ReactTooltip.hide()}>
          <li><Link onClick={() => ReactTooltip.hide()}>Settings</Link></li>
          <li><Link onClick={() => ReactTooltip.hide()}>Account</Link></li>
          <li><Link onClick={() => ReactTooltip.hide()}>Preferences</Link></li>
          <li><Link onClick={() => ReactTooltip.hide()}>Log Out</Link></li>
        </ul>
      </ReactTooltip>
    </div>
  )
}

export default PlayerCtrl
