import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';


class CharacterView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="CharacterView releaseAppmargin">
        <hgroup>
          <h3>Character View</h3>
        </hgroup>
        <div className="Layout scroll3">
          <div className={`CharactersMain`}>
            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>

            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>

          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(CharacterView)
