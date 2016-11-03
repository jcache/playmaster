import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect }  from 'react-redux';


export default class Navigation extends Component{
  render() {
    let {player} = this.props;
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="hide-on-med-and-down">
            <li><Link to={`player/${player.id}/`} >Dashboard</Link></li>
            <li><Link to={`player/${player.id}/gamesystems`} >Game Systems</Link></li>
            <li><Link to={`player/${player.id}/characters`} >Characters</Link></li>
            <li><Link to={`player/${player.id}/campaigns`} >Campaigns</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
