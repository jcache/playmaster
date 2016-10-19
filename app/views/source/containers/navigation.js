import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect }  from 'react-redux';
import * as actions from '../actions';


class Navigation extends Component{
  authButton() {
    if (this.props.authenticated){
      return <Link
              to="/"
              onClick={() => this.props.authenticate(false)}
              className=""
              >Sign Out</Link>;
    }
    return <Link
            to="/"
            onClick={() => this.props.authenticate(true)}
            className=""
            >Sign In</Link>;
  }

  render() {
    // console.log('Navigation -- props: ', this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="right hide-on-med-and-down">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/characters" >Characters</Link></li>
            <li><Link to="/campaigns" >Campaigns</Link></li>
            <li><a onClick={()=> {alert('clicked')}}>Game Systems</a></li>
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
