import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';

class GameSystemView extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="GameSystemView releaseAppmargin">
        <div className="ViewPlaceholderContainer">
          <h3>Game System View</h3>
          <Link onClick={() => {this.context.router.goBack() }}>Go Back</Link>
        </div>
      </div>
    );
  }
}

GameSystemView.contextTypes = {
  router: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(GameSystemView)
