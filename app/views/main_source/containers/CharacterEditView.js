import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';
import { EditCharacter } from '../actions/CharacterActions';
import CharacterForm from '../container_forms/CharacterForm';

class CharacterEditView extends Component {
  constructor (props) {
    super(props);
  }

  handleSubmit(values){
    let { dispatch, character, params } = this.props;
    this.context.router.push(`/player/${character.pid}`);
    dispatch(EditCharacter(values))
  }

  render() {
    let {character} = this.props;
    let initialValues = {
      initialValues: character
    };
    return (
      <div className="CharacterView releaseAppmargin">
        <hgroup>
          <h3>Edit Character View</h3>
        </hgroup>
        <div className="Layout scroll3">
          <p>{`I am ${character.characterName}`}</p>
          <CharacterForm {...initialValues} onSubmit={(character) => this.handleSubmit(character)}/>
          <Link className={`btn btn-primary`} onClick={() => {this.context.router.goBack() }}>Go Back</Link>
        </div>
      </div>
    );
  }
}

CharacterEditView.contextTypes = {
  router: React.PropTypes.object
}
const mapStateToProps = (state) => {
  return {
    character: state.Character.selected_character,
  }
}
export default connect(mapStateToProps)(CharacterEditView)
