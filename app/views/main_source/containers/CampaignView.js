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
        <div className="ViewPlaceholderContainer">
          <h3>Campaign View</h3>
          <Link onClick={() => {this.context.router.goBack() }}>Go Back</Link>
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
