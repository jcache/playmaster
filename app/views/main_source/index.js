import React, { Component } from 'react';
import ApplicationFrame from './containers/ApplicationFrame';
import ApplicationHeader from './containers/ApplicationHeader';
import ApplicationNavigation from './containers/ApplicationNavigation';
import ApplicationFooter from './containers/ApplicationFooter';
import { connect}  from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="ApplicationFrame container-fluid">
        <div className={`ApplicationBody`}>
          <ApplicationHeader />
          <ApplicationNavigation/>
          <ApplicationFrame>
            {this.props.children}
          </ApplicationFrame>
          <ApplicationFooter/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.Player.player,
  }
}

export default connect(mapStateToProps)(App);
