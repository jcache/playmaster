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
      <div className="SettingsView releaseAppmargin">
        <div className="ViewPlaceholderContainer">
          <h3>Settings View</h3>
          <button onClick={() => {this.context.router.goBack() }}>Go Back</button>
        </div>
      </div>
    );
  }
}
SettingsView.contextTypes = {
  router: React.PropTypes.object
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(SettingsView)
