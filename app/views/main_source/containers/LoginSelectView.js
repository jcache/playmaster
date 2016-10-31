import React, { Component } from 'react';
import { connect}  from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import CreateProfileForm from '../container_forms/CreateProfileForm';
import PlayerChip from '../components/PlayerLoginChip';
import { CollectPlayer, CollectPlayers } from '../actions/PlayerActions';
import { authenticate } from '../actions';
import { Link } from 'react-router';
import { ipcRenderer, remote } from 'electron';
import * as actions from '../actions';
class LoginSelectView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      players: []
    }
  }

  onAuthenticate() {
    ipcRenderer.send('resize-to-main');
    this.props.dispatch(authenticate(true))
  }
  handleSubmit() {
  //   let { authenticated} = this.props;
  //   console.log(`authenticated: ${authenticated}`)
  //   this.props.dispatch(authenticate(true))
  }
  _playerList(){
    let { players, authenticated} = this.props;

    return players.map((player) => {
      return <PlayerChip key={player.id} player={player} onAuthenticate={(v) => this.onAuthenticate(v)} />
    });
  }
  componentDidMount(){
    this.props.dispatch(CollectPlayers());
    ipcRenderer.send('resize-to-login');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="LoginSelectView releaseAppmargin">
        <div style={{flex:1, display: 'flex', maxWidth: '520px'}}>
          <div style={{flex:1, display: 'flex', flexDirection: 'column'}}>
            <hgroup>
              <h2>Player Selection</h2>
            </hgroup>
            <div className={`PersonSelectList`}>
            <ul>
              {this._playerList()}
            </ul>
              <Link to="/create_player" className={`btn btn-xl btn-primary`} onClick={()=> { this.handleSubmit()}}>New Player</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
    players: state.Players.players
  }
}
export default connect(mapStateToProps)(LoginSelectView)
