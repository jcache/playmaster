import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router';

const PlayerLoginChip = (props) => {
  return (
    <li>
      <Link onClick={() => {props.onAuthenticate(true)}} data-tip data-for={`player_tip_${props.player.id}`} to={`player/${props.player.id}`} className={`active`} style={{backgroundImage: `url('./${props.player.avatar_uri}')`}}></Link>
      <ReactTooltip class={`player-tooltip`}  id={`player_tip_${props.player.id}`}  delayHide={10} place="top" delayShow={1}  effect="solid">
        {props.player.player_name}
      </ReactTooltip>
    </li>
  )
}

export default PlayerLoginChip
