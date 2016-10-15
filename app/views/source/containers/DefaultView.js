import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';

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

class DefaultView extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  _lookupCharacterInCampaign(id){
    return campaigns.map((c) =>{
      return c.charactersInGame.indexOf(id) != -1 ? c.campaignName : null
    });
  }

  _renderCharacters() {
    return characters.map((c) =>{
      return(
        <div key={c.id} className="character" >
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
      <div className="DefaultView">
        <div className='DashboardModules'>
          <div className='Chat Module '>
            <hgroup className='ModuleHeader'>
              <h3>Chat</h3>
            </hgroup>


          </div>
          <div className='Campaign Module '>
            <div className="campaignBgContainer"></div>
            <div className="campaignBody">
              <h3>Mazius Al'Ghul</h3>
              <h2>The Mazius Campaign</h2>
            </div>
            <div className="campaign_avatar"></div>
            <a onClick={()=>{alert('click left')}} className="seekButton left"><IoChevronLeft size={24} color={'rgba(255,255,255,1)'} /></a>
            <a onClick={()=>{alert('click right')}} className="seekButton right"><IoChevronRight size={24} color={'rgba(255,255,255,1)'} /></a>
          </div>
          <div className='Character Module '>
            <hgroup className='ModuleHeader'>
              <h3>Characters</h3>
            </hgroup>
            <div className="characterListContainer scroll3">
              {this._renderCharacters()}
            </div>
          </div>
        </div>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(DefaultView)
