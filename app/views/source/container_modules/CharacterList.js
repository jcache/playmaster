import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoMinus, IoPlus, IoClose, IoIosSearchStrong, IoIosGear, IoChevronDown } from 'react-icons/lib/io';

const characters = [
  {
    id: 1,
    characerName: "Mazius Al'Ghul",
    characerProfession: "Necromancer",
    characterAvatarUri: 'images/rogue.jpg'
  },
  {
    id: 2,
    characerName: "Peter Parker",
    characerProfession: "Sorcerer",
    characterAvatarUri: 'images/spiderman.jpg'
  },
  {
    id: 3,
    characerName: "Mazius Al'Ghul",
    characerProfession: "Psionic",
    characterAvatarUri: 'images/rogue.jpg'
  },
  {
    id: 4,
    characerName: "Mazius Al'Ghul",
    characerProfession: "Bio-Wizard",
    characterAvatarUri: 'images/rogue.jpg'
  },
  {
    id: 5,
    characerName: "Mazius Al'Ghul",
    characerProfession: "Cleaner",
    characterAvatarUri: 'images/rogue.jpg'
  },
  {
    id: 6,
    characerName: "Mazius Al'Ghul",
    characerProfession: "Janitor",
    characterAvatarUri: 'images/rogue.jpg'
  },
]
const campaigns = [
  {
    id: 1,
    campaignName: "The Mazius Campaign",
    charactersInGame: [1,4,5,6], // ENUM FTW
    campaignBannerUri: 'images/galaxy.png'
  },
  {
    id: 3,
    campaignName: "Another Campaign",
    charactersInGame: [2,3], // ENUM FTW
    campaignBannerUri: 'images/galaxy.png'
  },
]

class CharacterList extends Component {

  constructor (props) {
    super(props);
    this.state = {
      selected: 1
    };
  }

  _lookupCharacterInCampaign(id){
    return campaigns.map((c) =>{
      return c.charactersInGame.indexOf(id) != -1 ? c.campaignName : null
    });
  }

  _renderCharacters() {
    let {selected} = this.state;
    let selectedCharacterClass = 'selectedCharacter';
    return characters.map((c) =>{
      return(
        <div
          onClick={() =>{this.setState({selected: c.id})}}
          key={c.id}
          className={`character ${selected == c.id ? selectedCharacterClass : null}`} >
          <div className="characterAvatar" style={{backgroundImage: `url('./${c.characterAvatarUri}')`}}></div>
          <div className="characterDetail">
            <p className="characterName">{c.characerName}</p>
            <p>{c.characerProfession}</p>
            <p>{this._lookupCharacterInCampaign(c.id)}</p>
          </div>
          <div className="expGauge">
            <span className="completion"></span>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className='Character Module '>
        <hgroup className='ModuleHeader'>
          <h3>Characters</h3>
        </hgroup>
        <div className="characterListContainer scroll3">
          {this._renderCharacters()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(CharacterList)
