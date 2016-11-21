import React, { Component } from 'react';
import ApplicationFrame from './containers/ApplicationFrame';
import ApplicationHeader from './containers/ApplicationHeader';
export default  class App extends Component {
  render() {
    return (
      <div className="ApplicationFrame container-fluid">
        <div className={`ApplicationBody`}>
          <ApplicationHeader />
          <ApplicationFrame>
            {this.props.children}
          </ApplicationFrame>
        </div>
      </div>
    )
  }
}
