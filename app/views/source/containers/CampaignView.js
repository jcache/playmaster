import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';


class CampaignView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="CampaignView">
        <div className="ViewPlaceholderContainer">
          <h3>Campaign View</h3>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(CampaignView)
