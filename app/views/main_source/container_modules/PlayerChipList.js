import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import PlayerChip from '../components/PlayerLoginChip';
import * as actions from '../actions';
import {LoadPlayer} from '../actions/PlayerActions';

 class PlayerChipList extends Component {
  constructor (props) {
    super(props);
  }
  onAuthenticate(player) {
    let { dispatch, authenticate} = this.props;
    ipcRenderer.send('resize-to-main');
    dispatch(authenticate(true))
    dispatch(LoadPlayer(player.id))
  }
  _renderList(){
    let { players, onAuthenticate} = this.props;
    const chip = typeof players !== 'undefined' ? players.map((player) => {
      return <PlayerChip key={player.id} player={player} onAuthenticate={(v) => this.onAuthenticate(v)} />
    }) : null;
    return chip;
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
