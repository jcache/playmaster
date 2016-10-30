import React from 'react';
import { IoIosSearchStrong, IoIosGear } from 'react-icons/lib/io';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router';


const PlayerCtrl = (props) => {
  let { router, player } = props;
  return (
  <div style={{flex:1, display: 'flex'}} >
    <ul className={`AppControlUtils`}>
      <li className="SearchIcon">
        <a href="#">
          <IoIosSearchStrong/>
        </a>
      </li>
      <li className="ProfileDropdown">

        <Link
          style={{backgroundImage: `url('./${player.avatar_uri}')`}}
          data-tip
          data-for='campaigns' />

      </li>
      <li className="SettingsIcon">
        <Link to={`settings`}>
          <IoIosGear />
        </Link>
      </li>
      <li className="ProfileBn dropdown-content"></li>
    </ul>

    <ReactTooltip
      class='tooltip characterPrefPane'
      id='campaigns'
      event='click'
      delayHide={10}
      place="bottom"
      delayShow={1}
      effect="solid">

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
