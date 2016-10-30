import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect }  from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import CreateProfileForm from '../container_forms/CreateProfileForm';
import * as actions from '../actions';

class CreateProfileView extends Component {
  constructor (props) {
    super(props);
  }
  handleSubmit = (values) => {
    console.log('CreateProfileView -- values: ',values);
    // console.log('CreateProfileView -- props: ', this.props);
    // console.log('CreateProfileView -- context: ', this.context);
    this.props.authenticate(true);
    // console.log('CreateProfileView -- authenticated after auth: ', this.props.authenticated);
    this.props.history.goBack();
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="DefaultView">
        <CreateProfileForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { authenticated: state.authenticated }
}
export default connect(mapStateToProps, actions)(CreateProfileView)
