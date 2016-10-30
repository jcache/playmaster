import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import CharacterListModule from '../container_modules/CharacterList';
import ChatDisplayModule from '../container_modules/ChatDisplay';
import CampaignDisplayModule from '../container_modules/CampaignDisplay';
import GamesystemDisplayModule from '../container_modules/GamesystemDisplay'; 


class DefaultView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: {}
    };
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

    let { authenticated } = this.props;
    let { selected } = this.state;
    const Style={"color":"#FFF", visibility: authenticated ? "visible" : "hidden" };
    return (
      <div className="DefaultView">
        <div className='DashboardModules'>
          <div style={{ flex: 1, flexDirection: 'column', display: 'flex', maxWidth: '350px'}}>
            <CharacterListModule _onSelectCharacter={( id ) => { this._onSelectCharacter(id) }}/>
            <ChatDisplayModule />
          </div>
          <div style={{ flex: 1, flexDirection: 'column', display: 'flex', maxWidth: '1140px'}}>
            <CampaignDisplayModule selected={selected} />
            <GamesystemDisplayModule />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.Player.player
  };
}
export default connect(mapStateToProps)(DefaultView)
