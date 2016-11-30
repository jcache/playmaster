import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect }  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';

class SettingsView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    let { router } = this.props;

    return (
      <div className="SettingsView releaseAppmargin">
        <hgroup>
          <h3>{`Settings View`}</h3>
        </hgroup>
        <div className="ViewPlaceholderContainer">
          <button className={`btn btn-primary`} onClick={() => router.goBack()}>Go Back</button>
        </div>
      </div>
    );
  }
};


export default connect()(SettingsView);
