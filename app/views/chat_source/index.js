import React, { Component } from 'react';
import ApplicationFrame from './containers/ApplicationFrame';
import ApplicationHeader from './containers/ApplicationHeader';
import ApplicationFooter from './containers/ApplicationFooter';
export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{flex:1, display: 'flex', flexDirection: 'column', height: '100%'}}>
          <ApplicationHeader />
          <ApplicationFrame>
            {this.props.children}
          </ApplicationFrame>
          <ApplicationFooter/>
      </div>
    );
  }
}
