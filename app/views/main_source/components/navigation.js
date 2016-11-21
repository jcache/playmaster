import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import NavLink from './navlink';

export const Navigation = (props) => {
  let {player} = props;
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="hide-on-med-and-down">
          <NavLink to={`player/${player.id}/`} >Dashboard</NavLink>
          <NavLink to={`player/${player.id}/gamesystems`} >Game Systems</NavLink>
          <NavLink to={`player/${player.id}/characters`} >Characters</NavLink>
          <NavLink to={`player/${player.id}/campaigns`} >Campaigns</NavLink>
        </ul>
      </div>
    </nav>
  );
}
