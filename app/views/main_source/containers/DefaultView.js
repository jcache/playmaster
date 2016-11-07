import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect }  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import CharacterListModule from '../container_modules/CharacterList';
import ChatDisplayModule from '../container_modules/ChatDisplay';
import CampaignDisplayModule from '../container_modules/CampaignDisplay';
import GamesystemDisplayModule from '../container_modules/GamesystemDisplay';
import * as actions from '../actions';


class DefaultView extends Component {
  constructor (props) {
    super(props);

    let character = this.props.characters[0];
    this.state = { selected: character ? character : {} };
    this._onSelectCharacter = this._onSelectCharacter.bind(this);
  }


  componentDidMount() {
    this.props.fetchCharacters();
    this.props.fetchCampaigns();
  }
  componentDidMount(){
    // alert(JSON.stringify(this.props.player));
  }

  _onSelectCharacter(character) {
    this.setState({
      selected: character
    });
  }

  render() {
    let { authenticated, selected, characters, campaigns, route, _onSelectCharacter } = this.props;
    const Style={"color":"#FFF", visibility: authenticated ? "visible" : "hidden" };
    return (
      <div className="DefaultView">
        <div className='DashboardModules'>
          <div style={{ flex: 1, flexDirection: 'column', display: 'flex', maxWidth: '350px'}}>
            <CharacterListModule { ...this.props } />
            <ChatDisplayModule />
          </div>
          <div style={{ flex: 1, flexDirection: 'column', display: 'flex', maxWidth: '1140px'}}>
            <CampaignDisplayModule selected={selected} characters={characters} />
            <GamesystemDisplayModule />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.Characters,
    campaigns: state.Campaigns,
    selected: state.SelectedCharacter
  };
}
export default connect(mapStateToProps, actions)(DefaultView)
