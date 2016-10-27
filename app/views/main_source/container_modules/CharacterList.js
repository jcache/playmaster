import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { CollectCharacters }  from '../actions/CharacterActions';
import { CollectCampaigns }  from '../actions/CampaignActions';
import { IoMinus, IoPlus, IoClose, IoIosGear, IoChevronDown, IoNavicon } from 'react-icons/lib/io';

class CharacterList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: 1
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(CollectCharacters());
    dispatch(CollectCampaigns());
  }

  _lookupCharacterInCampaign(id){
    let {campaigns} = this.props;
    return campaigns.map((c) =>{
      return c.charactersInGame.indexOf(id) != -1 ? c.campaignName : null
    });
  }

  _renderCharacters() {
    let {selected} = this.state;
    let {characters, campaigns, _onSelectCharacter } = this.props;
    let selectedCharacterClass = 'selectedCharacter';
    return characters.map((c) =>{
      return(
        <div
          onClick={() =>{ _onSelectCharacter(c); this.setState({selected: c.id}); }}
          key={c.id}
          className={`character ${selected == c.id ? selectedCharacterClass : null}`} >
          <div className="characterAvatar" style={{backgroundImage: `url('./${c.characterAvatarUri}')`}}></div>
          <div className="characterDetail">
            <p className="characterName">{c.characerName}</p>
            <p>{c.characerProfession}</p>
            <p  className="opt-sm">{this._lookupCharacterInCampaign(c.id)}</p>
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
          <IoNavicon size={28} className={`HamburgNav`} color={`rgba(255,255,255,1)`}/>
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
  return {
    characters: state.Characters.characters,
    campaigns: state.Campaigns.campaigns,

  }
}

export default connect(mapStateToProps)(CharacterList)
