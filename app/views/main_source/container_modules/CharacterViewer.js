import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';

//
class CharacterViewerModule extends Component {
  constructor (props) {
    super(props);
  }

  _renderAvatar(c) {
    let CharacterAvatar;
    if(c.AvatarUri == undefined){
      return <div style={{backgroundColor: `rgba(120, 84, 191, 1.00)`}} className="characterAvatar" >{c.characterName}</div>
    } else {
      return <div style={{backgroundImage: 'url(' + c.AvatarUri + ')' }} className="characterAvatar"></div>
    }
  }

  render() {
    let { selected_character, _onSelectCharacter } = this.props;

    if(selected_character != typeof undefined) console.log("CharacterViewerModule -- selected_character: ", selected_character);
    return(
      <div className="moduleBody">
        <h3>{`${selected_character != typeof undefined ?selected_character.characterProfession:""}`}</h3>
        <h2>{`${selected_character.characterName}`}</h2>
        {this._renderAvatar(selected_character)}
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

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.setState({
        selected_character: nextProps.selected_character,
      });
    }
  }

  renderCharacter() {
    let { selected_character } = this.state;
    return (
      <div style={{ flex:1, display: 'flex' }}>
        <div className="campaignBgContainer">
          <CharacterViewerModule {...this.props} selected_character={selected_character}/>
        </div>
        <a onClick={()=>{alert('click left')}} className="seekButton left"><IoChevronLeft size={24} color={'rgba(255,255,255,1)'} /></a>
        <a onClick={()=>{alert('click right')}} className="seekButton right"><IoChevronRight size={24} color={'rgba(255,255,255,1)'} /></a>
      </div>
    )
  }

  renderEmptyCharacter() {
    let { empty, player } = this.props;
    return (
      <div style={{ flex: 1, display: 'flex' }}>
        <h1>CHARACTERS NOT FOUND</h1>
        <Link
          className={`btn btn-info`}
          to={`player/${player.id}/character/new`}>
          {`Create Character`}
        </Link>
      </div>
    );
  }

  render() {
    let { selected_character } = this.state;
    let { empty, player } = this.props;
    return (
      <div className='CharacterViewer Module'>
        {empty ? this.renderEmptyCharacter() : this.renderCharacter()}
      </div>
    );
  }
}

export default connect()(CharacterViewer);
