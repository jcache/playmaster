import React, { Component } from 'react';


const CharacterListItem = (props) => {
  let { selected } = props.state;
  let selectedCharacterClass = 'selectedCharacter';
  return (
    <div
      onClick={() =>{props._selectCharacter({selected: c.id})}}
      key={c.id}
      className={`character ${selected == c.id ? selectedCharacterClass : null}`} >
      <div className="characterAvatar" style={{backgroundImage: `url('./${c.characterAvatarUri}')`}}></div>
      <div className="characterDetail">
        <p className="characterName">{c.characerName}</p>
        <p>{c.characerProfession}</p>
        <p  className="opt-sm">{ campaignName(c.id) }</p>
      </div>
      <div className="expGauge">
        <span className="completion"></span>
      </div>
    </div>
  )
}
