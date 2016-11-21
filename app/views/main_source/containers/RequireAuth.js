import React, { Component } from 'react';
// import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { ipcRenderer, remote } from 'electron';
import { LoadPlayer } from '../actions/PlayerActions';
import { LoadCharacters, LoadCharacter } from '../actions/CharacterActions';
import { LoadGameSystems } from '../actions/GameSystemActions';
import { LoadConversations } from '../actions/ConversationActions';
export default function(ComposedComponent) {

  class Authentication extends Component {

    componentDidMount() {
      let { params, dispatch, authenticated } = this.props;
      dispatch(LoadPlayer(params.id));
      dispatch(LoadCharacters(params.id));
      dispatch(LoadConversations(params.id));
      dispatch(LoadGameSystems());

      if (!authenticated) {
        ipcRenderer.send('resize-to-main');
        this.props.router.push(`/`);
      }
    }

    componentWillUpdate(nextProps) {
      // console.log(nextProps)
      if (this.props.authenticated != nextProps.authenticated) {
        this.props.router.push(`/`);
        // this.context.router.push(`/player/${nextProps.params.id}/characters`);
      }
    }
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.authenticated
    }
  }

  return connect(mapStateToProps)(Authentication);
}
