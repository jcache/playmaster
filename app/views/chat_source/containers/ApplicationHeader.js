import React, { Component } from 'react';
import { IoClose, IoPlus, IoMinus } from 'react-icons/lib/io';
import AppControllers from '../components/AppControllers';
import { remote } from 'electron';
const BrowserWindow = remote.getCurrentWindow();

class ApplicationHeader extends Component {
  onCloseChat() {
    BrowserWindow.close();
  };

  onMinimizeChat() {
    BrowserWindow.minimize();
  };

  render() {
    // alert(BrowserWindow.isFocused())
    return (
      <div className={`ChatHeader deep-purple`}>
        <AppControllers
          onCloseChat={this.onCloseChat}
          onMinimizeChat={this.onMinimizeChat}/>
      </div>
    );
  }
}

export default ApplicationHeader;
