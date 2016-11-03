import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import * as actions from '../actions';
import { IoMinus, IoPlus, IoClose, IoIosGear, IoChevronDown, IoNavicon } from 'react-icons/lib/io';

class CharacterList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: 1
    };
    console.log('state 1: ', this.state);
    console.log('init campaigns: ',this.props.campaigns);
  }

  componentDidMount() {
    this.props.fetchCharacters();
    this.props.fetchCampaigns();
  }

  _selectCharacter(newID){
    this.setState = newID;
  }

  _renderCharacters(props) {
    let {characters, campaigns, _onSelectCharacter } = props;
    let selectedCharacterClass = 'selectedCharacter';
    console.log('_renderCharacters -- props: ', props);
    return characters.map((c) =>{
      return(
        <div>
          <div>
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
          <div className="expGauge">
            <span className="completion"></span>
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div className='Character Module '>
        <hgroup className='ModuleHeader'>
          <IoNavicon size={28} className={`HamburgNav`} color={`rgba(255,255,255,1)`}/>
          <h3>Characters</h3>
        </hgroup>
        <div className="characterListContainer scroll3">
          {this._renderCharacters(this.props)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state 2: ', state);
  return {
    characters: state.Characters,
    campaigns: state.Campaigns,
  }
}

export default connect(mapStateToProps, actions)(CharacterList)
