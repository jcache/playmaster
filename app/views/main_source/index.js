import React, { Component } from 'react';
import ApplicationFrame from './containers/ApplicationFrame';
import ApplicationHeader from './containers/ApplicationHeader';
import ApplicationFooter from './containers/ApplicationFooter';
export default  class App extends Component {
  render() {
    return (
      <div className="ApplicationFrame container-fluid">
        <div className={`ApplicationBody`}>
          <ApplicationHeader />
          <ApplicationFrame>
            {this.props.children}
          </ApplicationFrame>
          <ApplicationFooter/>
        </div>
      </div>
    )
  }
}
