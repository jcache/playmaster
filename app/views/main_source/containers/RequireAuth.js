import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { ipcRenderer, remote } from 'electron';
import { CollectPlayer } from '../actions/PlayerActions';
export default function(ComposedComponent) {

  class Authentication extends Component {

    componentWillMount() {
      let { params, dispatch, authenticated } = this.props;
      if (!authenticated) {
        dispatch(CollectPlayer(params.id));
        ipcRenderer.send('resize-to-main');
        this.context.router.push(`/player/${params.id}/characters`);
      }
    }

    componentWillUpdate(nextProps) {
      if (this.props.authenticated != nextProps.authenticated) {
        this.context.router.push(`/player/${nextProps.params.id}/characters`);
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

  return connect(mapStateToProps)(withRouter(Authentication));
}
