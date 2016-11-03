import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ipcRenderer, remote } from 'electron';
import { CollectPlayer } from '../actions/PlayerActions';
export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      let { params, dispatch, authenticated } = this.props;
      if(!authenticated){
        dispatch(CollectPlayer(params.id));
        ipcRenderer.send('resize-to-main');
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
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
