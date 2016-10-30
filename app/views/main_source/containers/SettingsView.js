import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';
class SettingsView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="SettingsView">
        <div className="ViewPlaceholderContainer">
          <h3>Settings View</h3>
          <button onClick={() => {()=>{alert('click Go Back')}}}>Go Back</button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(SettingsView)
