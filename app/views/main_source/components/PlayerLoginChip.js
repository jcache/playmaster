import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router';

const PlayerLoginChip = ({player}) => {
  return (
    <li>
      <Link data-tip data-for={`player_tip_${player.id}`} to="" className={`active`} style={{backgroundImage: `url('./${player.avatar_uri}')`}}></Link>
      <ReactTooltip class={`player-tooltip`} id={`player_tip_${player.id}`}  delayHide={10} place="top" delayShow={1}  effect="solid">
        {player.player_name}
      </ReactTooltip>
    </li>
  )
}

export default PlayerLoginChip
