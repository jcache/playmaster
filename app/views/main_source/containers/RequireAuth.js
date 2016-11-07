import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ipcRenderer, remote } from 'electron';
import { CollectPlayer } from '../actions/PlayerActions';
import { LoadCharacters, LoadCharacter } from '../actions/CharacterActions';
export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      let { params, dispatch, authenticated } = this.props;
      dispatch(CollectPlayer(params.id));
      dispatch(LoadCharacters(params.id));

      if (!authenticated) {
        ipcRenderer.send('resize-to-main');
        this.context.router.push(`/`);
      }
    }

    componentWillUpdate(nextProps) {
      if (this.props.authenticated != nextProps.authenticated) {
        this.context.router.push(`/`);
        // this.context.router.push(`/player/${nextProps.params.id}/characters`);
      }
    }
    render() {
      // console.log(this.context);
      return <ComposedComponent {...this.props} />
    }
  }

  Authentication.contextTypes = {
    router: React.PropTypes.object
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.authenticated ,
      routing: state.routing
    }
  }

  return connect(mapStateToProps)(Authentication);
}
