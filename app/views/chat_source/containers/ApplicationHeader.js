import React, { Component } from 'react';
import { IoClose, IoPlus, IoMinus } from 'react-icons/lib/io';
import AppControllers from '../components/AppControllers';
class ApplicationHeader extends Component {
  render() {
    return (
      <div className={`ChatHeader deep-purple`} style={{flex: 1, display: 'flex', maxHeight: '60px', backgroundColor: 'red'}}>
        <AppControllers />
      </div>
    );
  }
}

export default ApplicationHeader;
