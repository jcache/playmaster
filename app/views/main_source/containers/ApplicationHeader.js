import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { authenticate } from '../actions';
import DefaultHeader from '../components/defaultheader';

class ApplicationHeader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      maximizeValue: false,
    };
  }

  onCloseApp(){
   ipcRenderer.send('app_close')
  }

  onAuthenticate() {
    this.props.dispatch(authenticate(false))
  }
  onMinimizeToggle(){
    ipcRenderer.send('app_minimize')
  }

  onMaximizeToggle(){
    let { maximizeValue } = this.state;
    this.setState({
      maximizeValue: !maximizeValue
    });
    ipcRenderer.send('app_maximize', !maximizeValue)
  }

  render() {
    let { player,authenticated} = this.props;
    return (
      <DefaultHeader  player={player} router={this.context.router}
      authenticated={authenticated} onAuthenticate={(v) => this.onAuthenticate(v)} onCloseApp={() => this.onCloseApp()} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
    player: state.Player.player
  }
}

export default connect(mapStateToProps)(ApplicationHeader)
