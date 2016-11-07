import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoEye, IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';
//
class CharacterViewerModule extends Component {
  constructor (props) {
    super(props);
  }
  render(){
    let { selected_character, _onSelectCharacter } = this.props;
    return(
      <div className="moduleBody">
        <h3>{`${selected_character.characterProfession}`}</h3>
        <h2>{`${selected_character.characterName}`}</h2>
        <div style={{backgroundImage: 'url(' + selected_character.AvatarUri + ')' }} className="character_avatar"></div>
        <div className={`characterActions`}>
          <Link onClick={()=>{_onSelectCharacter(selected_character)}} to={`player/${selected_character.pid}/character/${selected_character.id}`}><span>Show Character</span></Link>
          <Link><span>Show Campaign</span></Link>
        </div>
      </div>
    )
  }
}
//
class CharacterViewer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected_character: {}
    };
  }

  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps){
      this.setState({
        selected_character: nextProps.selected_character
      })
    }
  }

  render() {
    let { selected_character } = this.state;
    return (
      <div className='CharacterViewer Module'>
        <div className="campaignBgContainer">
          <CharacterViewerModule {...this.props} selected_character={selected_character}/>
        </div>
        <a onClick={()=>{alert('click left')}} className="seekButton left"><IoChevronLeft size={24} color={'rgba(255,255,255,1)'} /></a>
        <a onClick={()=>{alert('click right')}} className="seekButton right"><IoChevronRight size={24} color={'rgba(255,255,255,1)'} /></a>
      </div>
    );
  }
}


export default connect()(CharacterViewer)
