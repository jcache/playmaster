import React, { Component } from 'react';
import { connect}  from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import CreateProfileForm from '../container_forms/CreateProfileForm';
import PlayerChip from '../components/PlayerLoginChip';
import { CollectPlayer, CollectPlayers } from '../actions/PlayerActions';
import { Link } from 'react-router';
import { ipcRenderer, remote } from 'electron';

class LoginSelectView extends Component {
  constructor (props) {
    super(props);
  }

  handleSelectPlayer = (values) => {
    this.props.dispatch(CollectPlayer(values));
  }

  handleSubmit = () => {
    ipcRenderer.send('resize-to-main');
  }
  _playerList(){
    let { players } = this.props;
    let PlayerList = [];

    players.map((player) => {
      PlayerList.push(<PlayerChip key={player.id} player={player} />)
    });

    return (
      <ul>{PlayerList}</ul>
    )
  }
  componentDidMount(){
    ipcRenderer.send('resize-to-login');
    this.props.dispatch(CollectPlayers())
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
              {this._playerList()}
              <Link to="/step_two" className={`btn btn-xl btn-primary`} onClick={()=> { this.handleSubmit()}}>New Player</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
LoginSelectView.contextTypes = {
  router: React.PropTypes.object
}
const mapStateToProps = (state) => {
  return {
    players: state.Players.players
  }
}
export default connect(mapStateToProps)(LoginSelectView)
