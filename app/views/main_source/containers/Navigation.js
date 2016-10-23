import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect }  from 'react-redux';
import * as actions from '../actions';


class Navigation extends Component{
  authButton() {
    // AUTHENTICATED IS A BOOLEAN
    let {authenticated, authenticate} = this.props;
    return (
      <Link to="/" onClick={() => authenticate(!authenticated)}>
        {authenticated ? `Sign Out` : `Sign In`}
      </Link>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="right hide-on-med-and-down">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/characters" >Characters</Link></li>
            <li><Link to="/campaigns" >Campaigns</Link></li>
            <li><Link to="/gamesystems" >Game Systems</Link></li>
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
