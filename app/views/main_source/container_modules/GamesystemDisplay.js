import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';

class GamesystemDisplayModule extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className='Gamesystem Module '>
        <hgroup className='ModuleHeader'>
          <h3>Game Systems</h3>
        </hgroup>
        <div className={`moduleBody scroll4`}>
          <ul className={`communityModule`}>
            <li> <a></a></li>
            <li> <a></a></li>
            <li> <a></a></li>
            <li> <a></a></li>
            <li> <a></a></li>
            <li> <a></a></li>
          </ul>
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

export default connect(mapStateToProps)(GamesystemDisplayModule)
