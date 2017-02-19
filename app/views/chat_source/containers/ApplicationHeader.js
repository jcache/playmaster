import React, { Component } from 'react';
import { IoClose, IoPlus, IoMinus } from 'react-icons/lib/io';
import AppControllers from '../components/AppControllers';
import { remote, ipcRenderer } from 'electron';
const BrowserWindow = remote.getCurrentWindow();
console.log(remote);
class ApplicationHeader extends Component {
  onCloseChat() {
    var window = remote.getCurrentWindow();
    window.hide();
    // console.log(BrowserWindow.id);
    // ipcRenderer.send('closeConversation', BrowserWindow.id);
  };

  onMinimizeChat() {
    BrowserWindow.minimize();
  };

  render() {
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
