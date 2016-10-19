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
      <div className="CharacterView">
        <div className="ViewPlaceholderContainer">
          <h3>Character View</h3>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(CharacterView)
