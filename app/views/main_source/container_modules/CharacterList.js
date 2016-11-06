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
    return characters.map((c,i) =>{
      return(
        <div key={i}>
          <div onClick={() =>{ _onSelectCharacter(c); this.setState({selected: c.id}) }} className={`character selectedCharacter`} >
            <div className="characterAvatar" style={{backgroundImage: `url('./${c.characterAvatarUri}')`}}></div>
            <div className="characterDetail">
              <p className="characterName">{c.characerName}</p>
              <p>{c.characerProfession}</p>
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
        <hgroup className='ModuleHeader deep-purple'>
          <IoNavicon size={28} className={`HamburgNav`} color={`rgba(255,255,255,1)`}/>
          <h3>Recent Characters</h3>
        </hgroup>
        <div className="characterListContainer scroll3">
          {this._renderCharacters(this.props)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.Characters,
    campaigns: state.Campaigns,
  }
}

export default connect(mapStateToProps, actions)(CharacterList)
