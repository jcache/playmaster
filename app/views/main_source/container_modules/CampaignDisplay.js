import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';


class CampaignDisplayModule extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: {}
    };
  }

  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps){
      this.setState({
        selected: nextProps.selected
      })
    }
  }

  render() {
    let { selected } = this.props;
    return (
      <div className='Campaign Module '>
        <div className="campaignBgContainer"></div>
        <div className="moduleBody">
          <h3>{`${selected.characerName}`}</h3>
          <h2 className="opt-sm">{`${selected.characerProfession}`}</h2>
          <div style={{backgroundImage: 'url(' + selected.characterAvatarUri + ')' }} className="campaign_avatar"></div>
        </div>
        <a onClick={()=>{alert('click left')}} className="seekButton left"><IoChevronLeft size={24} color={'rgba(255,255,255,1)'} /></a>
        <a onClick={()=>{alert('click right')}} className="seekButton right"><IoChevronRight size={24} color={'rgba(255,255,255,1)'} /></a>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(CampaignDisplayModule)
