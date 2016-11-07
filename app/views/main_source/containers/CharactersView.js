import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';

class CharactersView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="CharactersView releaseAppmargin">
        <hgroup>
          <h3>Characters View</h3>
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

            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>

            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>

            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>
            <div className={`CharacterBlock`}></div>

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

CharactersView.contextTypes = {
  router: React.PropTypes.object
}
const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(CharactersView)
