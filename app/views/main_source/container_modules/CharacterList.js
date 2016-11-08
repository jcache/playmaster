import React, { Component } from 'react';
import { IoMinus, IoPlus, IoClose, IoIosGear, IoChevronDown, IoNavicon } from 'react-icons/lib/io';
import { connect}  from 'react-redux';
class CharacterList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: 0
    };
  }
  _renderAvatar(c){
    let CharacterAvatar;
    if(c.AvatarUri == undefined){
      return  <div className="characterAvatar" style={{backgroundColor: `rgba(120, 84, 191, 1.00)`}}>{c.characterName.charAt(0)}</div>
    } else {
      return <div className="characterAvatar" style={{backgroundImage: `url('./${c.AvatarUri}')`}}></div>
    }
  }
  _renderCharacters(props) {
    let {characters, campaigns, _onSelectCharacter } = props;
    let {selected } = this.state;
    return characters.map((c,i) =>{
      const selClass = c.id == selected ? 'selectedCharacter' : null ;
      return(
        <div key={i}>
          <div
            onClick={() =>{ _onSelectCharacter(c); this.setState({selected: c.id}) }}
            className={`character ${selClass}`} >
            {this._renderAvatar(c)}
            <div className="characterDetail">
              <p className="characterName">{c.characterName}</p>
              <p>{c.characterProfession}</p>
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
    characters: state.Characters.characters,
    campaigns: state.Campaigns,
  }
}
export default connect(mapStateToProps)(CharacterList)
