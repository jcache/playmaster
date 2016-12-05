import React, { Component } from 'react';
import { IoClose, IoPlus, IoMinus } from 'react-icons/lib/io';
class AppControllers extends Component {
  render() {
    let { onCloseChat, onMinimizeChat } = this.props;
    return (
      <ul className={`AppControl`}>
        <li><a onClick={() => onCloseChat()} ><IoClose/></a></li>
        <li><a onClick={() => onMinimizeChat()} ><IoMinus/></a></li>
      </ul>
    );
  }
}

export default AppControllers;
