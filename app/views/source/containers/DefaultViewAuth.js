import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import CharacterListModule from '../container_modules/CharacterList';
import CampaignDisplayModule from '../container_modules/CampaignDisplay';
import ChatDisplayModule from '../container_modules/ChatDisplay';
import requireAuth from './RequireAuth';


class DefaultViewAuth extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="DefaultView">
        <div className='DashboardModules'>
          <div style={{ flex: 1, flexDirection: 'column', display: 'flex', maxWidth: '350px'}}>
            <ChatDisplayModule />
            <CharacterListModule />
          </div>
          <CampaignDisplayModule />
          <div>THIS IS THE AUTHORIZED VIEW!!!</div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {};
}
export default connect(mapStateToProps)(requireAuth(DefaultViewAuth))
