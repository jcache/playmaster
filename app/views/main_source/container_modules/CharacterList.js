import React, { Component } from 'react';
import { IoMinus, IoPlus, IoClose, IoIosGear, IoChevronDown, IoNavicon } from 'react-icons/lib/io';

const CharacterList = (props) => {
  let {characters, campaigns, selected } = props;
  function _renderCharacters(props) {
    const lookupCharacterInCampaign = (id) => {
      return campaigns.length > 0 ? campaigns.map((c) =>{
        return c.charactersInGame
      }) : null ;
    }
    let selectedCharacterClass = 'selectedCharacter';
    return characters.map((c) =>{
      return(
        <div
          onClick={() =>{ props.selectCharacter(c.id); }}
          key={c.id}
          className={`character ${selected == c.id ? selectedCharacterClass : null}`} >
          <div className="characterAvatar" style={{backgroundImage: `url('./${c.characterAvatarUri}')`}}></div>
          <div className="characterDetail">
            <p className="characterName">{`${c.characerName}`}</p>
            <p>{c.characerProfession}</p>
            <p  className="opt-sm">{`${c.campaignName}`}</p>
          </div>
          <div className="expGauge">
            <span className="completion"></span>
          </div>
        </div>
      )
    });
  }

  return (
    <div className='Character Module '>
      <hgroup className='ModuleHeader'>
        <IoNavicon size={28} className={`HamburgNav`} color={`rgba(255,255,255,1)`}/>
        <h3>Characters</h3>
      </hgroup>
      <div className="characterListContainer scroll3">
        {_renderCharacters(props)}
      </div>
    </div>
  );
}



export default CharacterList
