import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import CharacterListModule from '../container_modules/CharacterList';
import ChatDisplayModule from '../container_modules/ChatDisplay';
import CampaignDisplayModule from '../container_modules/CampaignDisplay';
import GamesystemDisplayModule from '../container_modules/GamesystemDisplay';


class DefaultView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    let t = this.props.authenticated ? "visible" : "hidden"; // this.props.authenticated;
    const Style={"color":"#FFF", visibility: t }
    return (
      <div className="DefaultView">
        <div className='DashboardModules'>
          <div style={{ flex: 1, flexDirection: 'column', display: 'flex', maxWidth: '350px'}}>
            <CharacterListModule />
            <ChatDisplayModule />
          </div>
          <div style={{ flex: 1, flexDirection: 'column', display: 'flex'}}>
            <CampaignDisplayModule />
            <div style={Style}>THIS IS THE AUTHENTICATED VIEW!</div>
            <GamesystemDisplayModule />
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {};
}
export default connect(mapStateToProps)(DefaultView)
