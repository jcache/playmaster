import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { Link } from 'react-router';
import { connect }  from 'react-redux';


class ApplicationNavigation extends Component {

  constructor (props) {
    super(props);
    this.state = {
      player: {},
      authenticated: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      player: nextProps.player,
      authenticated: nextProps.authenticated,
    });
  }

  render(){
    let { player, authenticated }  = this.state;
    return (
      <nav className="nav" style={{ display: `${this.state.authenticated ? "block" : "none"}` }}>
        <div className="nav-wrapper">
          <ul>
            <li><Link onlyActiveOnIndex activeClassName={`active`} to={`player/${player.id}/`}>Dashboard</Link></li>
            <li><Link activeClassName={`active`} to={`player/${player.id}/gamesystems`}>Game Systems</Link></li>
            <li><Link activeClassName={`active`} to={`player/${player.id}/characters`}>Characters</Link></li>
            <li><Link activeClassName={`active`} to={`player/${player.id}/campaigns`}>Campaigns</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.Player.authenticated,
    player: state.Player.player,
  };
}

export default connect(mapStateToProps)(ApplicationNavigation);
