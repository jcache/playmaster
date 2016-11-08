import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';

class CharacterView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    let {character} = this.props;
    return (
      <div className="CharacterView releaseAppmargin">
        <hgroup>
          <h3>{`Character View`}<span className={`pull-right`}><Link className={`btn btn-info`} to={`player/${character.pid}/character/new`}>Create Character</Link></span></h3>

        </hgroup>
        <div className="Layout scroll3">
          <p>{`I am ${character.characterName}`}</p>
          <Link className={`btn btn-primary`} onClick={() => {this.context.router.goBack() }}>Go Back</Link>
          <Link className={`btn btn-info`} to={`player/${character.pid}/character/${character.id}/edit`}>Edit Character</Link>
        </div>
      </div>
    );
  }
}

CharacterView.contextTypes = {
  router: React.PropTypes.object
}
const mapStateToProps = (state) => {
  return {
    character: state.Character.selected_character,
  }
}
export default connect(mapStateToProps)(CharacterView)
