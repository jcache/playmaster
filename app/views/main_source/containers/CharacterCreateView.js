import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';
import { CreateCharacter } from '../actions/CharacterActions';
import CharacterForm from '../container_forms/CharacterForm';

class CharacterCreateView extends Component {
  constructor (props) {
    super(props);
  }
  handleSubmit(values){
    let { dispatch } = this.props;
    dispatch(CreateCharacter(values.pid, values));
    this.context.router.push(`/player/${values.pid}`);
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
          <div style={{maxWidth: '1140px'}}>
            <CharacterForm {...initialValues} onSubmit={(character) => this.handleSubmit(character)}/>
            <Link className={`btn btn-primary`} onClick={() => {this.context.router.goBack() }}>Go Back</Link>
          </div>
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
