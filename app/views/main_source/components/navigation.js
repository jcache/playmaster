import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import NavLink from './navlink';

export const Navigation = (props) => {
  let {player} = props;
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="hide-on-med-and-down">
          <li><Link onlyActiveOnIndex activeClassName={`active`} to={`player/${player.id}/`} >Dashboard</Link></li>
          <li><Link activeClassName={`active`} to={`player/${player.id}/gamesystems`} >Game Systems</Link></li>
          <li><Link activeClassName={`active`} to={`player/${player.id}/characters`} >Characters</Link></li>
          <li><Link activeClassName={`active`} to={`player/${player.id}/campaigns`} >Campaigns</Link></li>
        </ul>
      </div>
    </nav>
  );
}
