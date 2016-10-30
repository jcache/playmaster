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
      <div className="GameSystemView">
        <div className="ViewPlaceholderContainer">
          <h3>Game System View</h3>
          <button onClick={()=>{ alert('click Go Back') }}>Go Back</button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(GameSystemView)
