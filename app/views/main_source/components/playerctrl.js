import React, { Component } from 'react';
import { connect}  from 'react-redux';
import { IoIosSearchStrong, IoIosGear, IoLogIn } from 'react-icons/lib/io';
import { MdExitToApp, MdPerson } from 'react-icons/lib/md';
import { FaSliders } from 'react-icons/lib/fa';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router';

class PlayerCtrl extends Component {
  constructor (props) {
    super(props);
  }

  render(){
    let { router, player, onAuthenticate} = this.props;
    return (
      <div style={{flex:1, display: 'flex'}} >
        <ul className={`AppControlUtils`}>
          <li className="SearchIcon"><a href="#"> <IoIosSearchStrong/> </a></li>
          <li className="ProfileDropdown">
            <Link style={{backgroundImage: `url('${player.avatar_uri}')`}} data-tip data-for='campaigns' />
          </li>
          <li className="SettingsIcon"><Link to={`player/${player.id}/settings`}> <IoIosGear /></Link></li>
          <li className="ProfileBn dropdown-content"></li>
        </ul>

        <ReactTooltip class='tooltip characterPrefPane' id='campaigns'
          event='click' delayHide={10} place="bottom" delayShow={1} effect="solid">
          <ul onMouseLeave={() => ReactTooltip.hide()}>
            <li><Link to={`player/${player.id}/profile`} onClick={() => ReactTooltip.hide()}><MdPerson/> Player Profile</Link></li>
            <li><Link onClick={() => ReactTooltip.hide()}><FaSliders/> Player Settings</Link></li>
            <li><Link onClick={() => {ReactTooltip.hide(); onAuthenticate(false)}}><IoLogIn/> Log Out</Link></li>
          </ul>
        </ReactTooltip>
      </div>
    )
  }
}
export default connect()(PlayerCtrl)
