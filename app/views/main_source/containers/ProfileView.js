import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { Link } from 'react-router';

class ProfileView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    let {character} = this.props;
    return (
      <div className="ProfileView releaseAppmargin">
        <hgroup>

        </hgroup>
        <div className="Layout scroll3">
          <p>{`I am the profile View`}</p>
          <Link className={`btn btn-primary`} onClick={() => {this.context.router.goBack() }}>Go Back</Link>
        </div>
      </div>
    );
  }
}

ProfileView.contextTypes = {
  router: React.PropTypes.object
}
const mapStateToProps = (state) => {
  return {
    character: state.Character.selected_character,
  }
}
export default connect(mapStateToProps)(ProfileView)
