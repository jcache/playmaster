import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import CharacterListModule from '../container_modules/CharacterList';
import CampaignDisplayModule from '../container_modules/CampaignDisplay';
import ChatDisplayModule from '../container_modules/ChatDisplay';


class DefaultView extends Component {
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
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(DefaultView)
