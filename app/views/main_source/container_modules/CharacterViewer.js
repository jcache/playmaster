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
    let { selected } = this.props;
    return(
      <div className="moduleBody">
        <h3>{`${selected.characerProfession}`}</h3>
        <h2>{`${selected.characerName}`}</h2>
        <div style={{backgroundImage: 'url(' + selected.characterAvatarUri + ')' }} className="character_avatar"></div>
        <div className={`characterActions`}>
          <Link><span>View Character</span></Link>
          <Link><span>Join Campaign</span></Link>
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
      selected: {}
    };
  }

  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps){
      this.setState({
        selected: nextProps.selected
      })
    }
  }

  render() {
    let { selected } = this.props;
    return (
      <div className='CharacterViewer Module '>
        <div className="campaignBgContainer">
          <CharacterViewerModule selected={selected}/>
        </div>

        <a onClick={()=>{alert('click left')}} className="seekButton left"><IoChevronLeft size={24} color={'rgba(255,255,255,1)'} /></a>
        <a onClick={()=>{alert('click right')}} className="seekButton right"><IoChevronRight size={24} color={'rgba(255,255,255,1)'} /></a>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(CharacterViewer)
