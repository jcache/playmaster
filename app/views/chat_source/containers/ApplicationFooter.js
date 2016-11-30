import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';

class ApplicationFooter extends Component {

  render() {
    return (
      <div style={{flex: 1, display: 'flex', maxHeight: '60px', backgroundColor: 'green'}}>
        <p>Footer</p>
      </div>
    );
  }
}

export default ApplicationFooter;
