import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect }  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import CharacterListModule from '../container_modules/CharacterList';
import ChatDisplayModule from '../container_modules/ChatDisplay';
import CharacterViewer from '../container_modules/CharacterViewer';
import GamesystemDisplayModule from '../container_modules/GamesystemDisplay';
import { LoadCharacters, LoadCharacter } from '../actions/CharacterActions';

class DefaultView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected_character: {},
    };
  }
  componentWillMount(){

  }
  componentDidMount() {
    let { selected_character } = this.props;

    this.setState({
      selected_character: selected_character,
    });
  }

  _onSelectCharacter(character) {
    let { dispatch } = this.props;
    dispatch(LoadCharacter(character.id));
    this.setState({
      selected_character: character,
    });
  }

  render() {

    let { authenticated, player, conversations } = this.props;
    let { selected_character } = this.state;
    const Style={ "color" : "#FFF", visibility: authenticated ? `visible` : `hidden` };
    return (
      <div className="DefaultView">
        <div className='DashboardModules'>
          <div style={{ flex: 1, flexDirection: 'column', display: 'flex', maxWidth: '350px' }}>
            <CharacterListModule _onSelectCharacter={(id) => { this._onSelectCharacter(id)}} />
            <ChatDisplayModule conversations={conversations}/>
          </div>
          <div style={{ flex: 1, flexDirection: 'column', display: 'flex', maxWidth: '1140px' } } >
            <CharacterViewer player={player} empty={selected_character.id == undefined ? true : false} _onSelectCharacter={( id ) => { this._onSelectCharacter(id) }} selected_character={selected_character} />
            <GamesystemDisplayModule />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    conversations: state.Conversations.conversations,
    player: state.Player.player,
    characters: state.Characters.characters,
    selected_character: state.Character.selected_character,
  };
};

export default connect(mapStateToProps)(DefaultView);
