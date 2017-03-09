import React, { Component } from 'react';
import { connect}  from 'react-redux';
import PlayerChipList from '../container_modules/PlayerChipList';
import { LoadPlayers } from '../actions/PlayerActions';
import { authenticate } from '../actions';
import { Link } from 'react-router';
import { ipcRenderer, remote } from 'electron';
class LoginSelectView extends Component {

  constructor (props) {
    super(props);
  }

  componentWillMount(){
    this.props.dispatch(LoadPlayers());
  }

  render() {
    const { handleSubmit, players, authenticated} = this.props;
    return (
      <div className="LoginSelectView releaseAppmargin">
        <div style={{flex:1, display: 'flex'}}>
          <div style={{flex:1, display: 'flex', flexDirection: 'column'}}>
            <div className={`PersonSelectList`}>
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
    authenticated: state.Player.authenticated,
    players: state.Players.players
  }
}
export default connect(mapStateToProps)(LoginSelectView)
