import React, { Component } from 'react';

import ApplicationFrame from './containers/ApplicationFrame';

class App extends Component {
  render() {
    return (
      <ApplicationFrame>
        {this.props.children}
      </ApplicationFrame>
    )
  }
}

export default App;
