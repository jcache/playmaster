import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import PlayerChip from '../components/PlayerLoginChip';
import * as actions from '../actions';
import {CollectPlayer} from '../actions/PlayerActions';

 class PlayerChipList extends Component {
  constructor (props) {
    super(props);
  }
  onAuthenticate(player) {
    let { dispatch, authenticate} = this.props;
    ipcRenderer.send('resize-to-main');
    dispatch(authenticate(true))
    dispatch(CollectPlayer(player.id))
  }
  _renderList(){
    let { players, onAuthenticate} = this.props;
    return players.map((player) => {
      return <PlayerChip key={player.id} player={player} onAuthenticate={(v) => this.onAuthenticate(v)} />
    });
  }

  render() {
    return (
      <ul>
        {this._renderList()}
      </ul>
    );
  }
}
export default connect()(PlayerChipList)
