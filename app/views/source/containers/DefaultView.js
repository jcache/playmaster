import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';

class DefaultView extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="DefaultView">
        <div className='DashboardModules'>
          <div className='Chat Module '>
            <hgroup className='ModuleHeader'>
              <h3>Chat</h3>
            </hgroup>


          </div>
          <div className='Campaign Module '>
            <div className="campaignBgContainer"></div>
            <div className="campaignBody">
              <h3>Mazius Al'Ghul</h3>
              <h2>The Mazius Campaign</h2>
            </div>
            <div className="campaign_avatar"></div>
            <a onClick={()=>{alert('click left')}} className="seekButton left"><IoChevronLeft size={24} color={'rgba(255,255,255,1)'} /></a>
            <a onClick={()=>{alert('click right')}} className="seekButton right"><IoChevronRight size={24} color={'rgba(255,255,255,1)'} /></a>
          </div>
          <div className='Character Module '>
            <hgroup className='ModuleHeader'>
              <h3>Characters</h3>
            </hgroup>
            <div className="characterListContainer scroll3">
              <div className="character">
                <div className="characterAvatar"></div>
              </div>
              <div className="character">
                <div className="characterAvatar"></div>
              </div>
              <div className="character">
                <div className="characterAvatar"></div>
              </div>
              <div className="character">
                <div className="characterAvatar"></div>
              </div>
              <div className="character">
                <div className="characterAvatar"></div>
              </div>
              <div className="character">
                <div className="characterAvatar"></div>
              </div>
              <div className="character">
                <div className="characterAvatar"></div>
              </div>
              <div className="character">
                <div className="characterAvatar"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(DefaultView)
