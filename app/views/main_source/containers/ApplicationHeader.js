import React, { Component } from 'react';
import { remote } from 'electron';
import { connect }  from 'react-redux';
import { setAuthenticatedStatus } from '../actions/PlayerActions';
import AppCtrl from '../components/appctrl';
import { Navigation } from '../components/navigation';
import PlayerCtrl from '../components/playerctrl';
const BrowserWindow = remote.getCurrentWindow();
class ApplicationHeader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isMaximized: false,
    };
  }

  onCloseApp() {
    BrowserWindow.close();
  }

  onAuthenticate(v) {
    let { id } = this.props.player;
    let { dispatch } = this.props;
    dispatch(setAuthenticatedStatus(id, v));
  }

  onMinimize() {
    BrowserWindow.minimize();
  }

  onMaximize() {
    let { isMaximized } = this.state;
    this.setState({ isMaximized: !isMaximized });
    if (!isMaximized) {
      BrowserWindow.maximize();
    } else {
      BrowserWindow.unmaximize();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.player !== nextProps.player) {
      console.log(`gotnew props`, this.props.player);
    }
  }

  render() {
    let { player, authenticated } = this.props;
    return (
      <div className={`ApplicationHeader header-scroll small`} >
        <AppCtrl {...this.props}
          onMinimize={() => this.onMinimize()}
          onMaximize={() => this.onMaximize()}
          onCloseApp={() => this.onCloseApp()} />
        {authenticated ? <Navigation {...this.props} /> : null }
        {authenticated ? <PlayerCtrl {...this.props}
          onAuthenticate={(v) => this.onAuthenticate(v)} /> : null }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.Player.authenticated,
    player: state.Player.player,
  };
}

export default connect(mapStateToProps)(ApplicationHeader);
