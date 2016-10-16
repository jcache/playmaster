import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect }  from 'react-redux';
import * as actions from '../actions';


class Navigation extends Component{
  authButton() {
    if (this.props.authenticated){
      return <a
              className=""
              onClick={() => this.props.authenticate(false)}
              >Sign Out</a>;
    }
    return <a
            className=""
            onClick={() => this.props.authenticate(true)}
            >Sign In</a>;
  }

  render() {
    console.log('Navigation -- props: ', this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="right hide-on-med-and-down nav-login">
            <li className="nav-item">
              {this.authButton()}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { authenticated: state.authenticated }
}

export default connect(mapStateToProps, actions)(Navigation);
