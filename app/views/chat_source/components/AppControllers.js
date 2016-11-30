import React, { Component } from 'react';
import { IoClose, IoPlus, IoMinus } from 'react-icons/lib/io';
class AppControllers extends Component {
  render() {
    return (
      <ul className={`AppControl`}>
        <li><a onClick={() => this.props.onCloseChat()} ><IoClose/></a></li>
        <li><a onClick={() => this.props.onMinimizeChat()} ><IoMinus/></a></li>
      </ul>
    );
  }
}

export default AppControllers;
