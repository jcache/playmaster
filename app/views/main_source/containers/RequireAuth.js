import React, { Component } from 'react';
// import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { ipcRenderer, remote } from 'electron';
import { LoadPlayer,isAuthenticated } from '../actions/PlayerActions';
import { LoadCharacters, LoadCharacter } from '../actions/CharacterActions';
import { LoadGameSystems } from '../actions/GameSystemActions';
import { LoadConversations } from '../actions/ConversationActions';
export default function(ComposedComponent) {

  class Authentication extends Component {

    componentDidMount() {
      let { params, dispatch, authenticated,router} = this.props;
      dispatch(LoadPlayer(params.id));
      dispatch(LoadCharacters(params.id));
      dispatch(LoadConversations(params.id));
      dispatch(LoadGameSystems());
      dispatch(isAuthenticated(params.id));
      if (authenticated == true) {
        ipcRenderer.send('resize-to-main');
      }
    }

    // componentWillMount() {
    //   this.props.dispatch(LoadCharacter(this.props.params.id));
    // }

    componentWillUpdate(nextProps) {
      let { router } = this.props;
      if (nextProps.authenticated == false) {
        router.push(`/`);
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.Player.authenticated
    }
  }

  return connect(mapStateToProps)(Authentication);
}
