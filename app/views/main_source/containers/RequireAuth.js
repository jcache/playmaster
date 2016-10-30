import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import SignUp from '../components/signup';

export default function(ComposedComponent) {

  class Authentication extends Component {

    componentWillMount() {
      console.log('Auth HOC -- ComposedComponent: ', ComposedComponent);
      if (!this.props.authenticated) {
        console.log('access denied!!!');
        this.context.router.push('/create_profile');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      // if (this.props.authenticated) {
        return <ComposedComponent {...this.props} />;
      // }

      // return (
      //   <ComposedComponent {...this.props} >
      //     <SignUp />
      //   </ComposedComponent>
      // );
    }
  }

  Authentication.contextTypes = {
    router: React.PropTypes.object
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated }
  }

  return connect(mapStateToProps)(withRouter(Authentication));
}
