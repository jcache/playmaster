import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ipcRenderer, remote } from 'electron';
import { CollectPlayer } from '../actions/PlayerActions';
export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      let { params, dispatch } = this.props;
      if(params.id){
        dispatch(CollectPlayer(params.id));
        ipcRenderer.send('resize-to-main');
      }
    }

    componentWillUpdate(nextProps) { }

    render() {
      return <ComposedComponent {...this.props}/>
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.authenticated ,
      routing: state.routing
    }
  }

  return connect(mapStateToProps)(Authentication);
}
