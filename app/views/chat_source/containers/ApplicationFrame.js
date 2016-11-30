import React, { Component } from 'react';

class ApplicationFrame extends Component {

  render() {
    return (
      <div style={{flex: 1, display: 'flex'}}>
        {this.props.children}
      </div>
    );
  }
}

export default ApplicationFrame;
