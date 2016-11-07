import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';
import { CreateCharacter } from '../actions/CharacterActions';
import CreateCharacterForm from '../container_forms/EditCharacterForm';

class CharacterCreateView extends Component {
  constructor (props) {
    super(props);
  }
  handleSubmit(values){
    let {params} = this.props
    this.context.router.push(`/player/${params.id}`);
    let { dispatch } = this.props;
    dispatch(CreateCharacter(values))
  }

  render() {
    let {params} = this.props
    let initialValues = {
      initialValues: {
        pid: params.id
      }
    };
    return (
      <div className="CharacterView releaseAppmargin">
        <hgroup>
          <h3>Create Character View</h3>
        </hgroup>
        <div className="Layout scroll3">
          <p>{`Lets Create a character`}</p>
          <CreateCharacterForm {...initialValues} onSubmit={(character) => this.handleSubmit(character)}/>

          <Link className={`btn btn-primary`} onClick={() => {this.context.router.goBack() }}>Go Back</Link>
        </div>
      </div>
    );
  }
}
CharacterCreateView.contextTypes = {
  router: React.PropTypes.object
}
const mapStateToProps = (state) => {
  return {  }
}
export default connect(mapStateToProps)(CharacterCreateView)
