import React, { Component } from 'react';
import { connect}  from 'react-redux';
import PlayerChip from '../components/PlayerLoginChip';
// import * as actions from '../actions';
import {LoadPlayer, setAuthenticatedStatus} from '../actions/PlayerActions';

 class PlayerChipList extends Component {
  constructor (props) {
    super(props);
  }
  onAuthenticate(player) {
    let { dispatch, authenticate} = this.props;
    dispatch(setAuthenticatedStatus(player.id, true));
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
