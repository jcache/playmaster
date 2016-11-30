import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';

class CampaignView extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="CampaignView releaseAppmargin">
        <hgroup>
          <h3>Campaign View</h3>
        </hgroup>
        <div className="Layout scroll3">
        </div>
      </div>
    );
  }
}

CampaignView.contextTypes = {
  router: React.PropTypes.object
}
const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps)(CampaignView)
