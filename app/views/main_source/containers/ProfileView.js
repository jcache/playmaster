import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link, hashHistory } from 'react-router';
import PlayerProfileForm from '../container_forms/PlayerProfileForm';
import { EditProfile } from '../actions/PlayerActions';

class ProfileView extends Component {
  constructor (props) {
    super(props);
  }
  handleSubmit(values){
    let { dispatch, router } = this.props;
    dispatch(EditProfile(values));
    hashHistory.push(`/player/${values.id}`)

  }
  render() {
    let {player, router} = this.props;
    let initialValues = {
      initialValues: player
    };
    return (
      <div className="ProfileView releaseAppmargin">
        <hgroup>
          <h3>Update Your Profile</h3>
        </hgroup>
        <div className="Layout scroll3">
          <PlayerProfileForm  {...initialValues} onSubmit={(player) => this.handleSubmit(player)} />
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
export default connect(mapStateToProps)(ProfileView)
