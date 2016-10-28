import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import CreateProfileForm from '../container_forms/CreateProfileForm';

class CreateProfileView extends Component {
  constructor (props) {
    super(props);
  }
  handleSubmit = (values) => {
    console.log(values);
    this.context.router.push("/dashboard");
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="DefaultView">
      <div style={{flex:1}}>
        <hgroup>
          <h1>Create a Player</h1>
        </hgroup>

        <CreateProfileForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
CreateProfileView.contextTypes = {
  router: React.PropTypes.object
}
const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(CreateProfileView)
