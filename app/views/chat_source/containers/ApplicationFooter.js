import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';

class ApplicationFooter extends Component {

  render() {
    return (
      <div  className={`ChatFooter`}>
        <p>Footer</p>
      </div>
    );
  }
}

export default ApplicationFooter;
