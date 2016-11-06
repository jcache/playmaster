import React, { Component } from 'react';
import { connect}  from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import CreateProfileForm from '../container_forms/CreateProfileForm';
import PlayerChipList from '../container_modules/PlayerChipList';
import { CollectPlayer, LoadPlayers } from '../actions/PlayerActions';
import { authenticate } from '../actions';
import { Link } from 'react-router';
import { ipcRenderer, remote } from 'electron';
import * as actions from '../actions';
class LoginSelectView extends Component {

  constructor (props) {
    super(props);
  }
  componentDidMount(){
    this.props.dispatch(LoadPlayers());
    ipcRenderer.send('resize-to-login');
  }

  render() {
    const { handleSubmit, players, authenticated} = this.props;
    return (
      <div className="LoginSelectView releaseAppmargin">
        <div style={{flex:1, display: 'flex', maxWidth: '520px'}}>
          <div style={{flex:1, display: 'flex', flexDirection: 'column'}}>
            <hgroup>
              <h2>Player Selection</h2>
            </hgroup>
            <div className={`PersonSelectList`}>
              <PlayerChipList players={players} authenticated={authenticated} authenticate={authenticate}/>
              <Link to="/create_player" className={`btn btn-xl btn-primary`}>New Player</Link>
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
