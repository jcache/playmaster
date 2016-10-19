import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';


class GameSystemView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="GameSystemView">
        <div className="ViewPlaceholderContainer">
          <h3>Game System View</h3>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(GameSystemView)
