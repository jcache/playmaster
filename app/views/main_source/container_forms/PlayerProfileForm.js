import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import uuid from 'uuid';
import { Field, reduxForm } from 'redux-form';
import fs from 'fs-extra';
let {dialog} = remote;
import {
  renderTextField,
  renderTextArea,
  renderFileField,
} from '../components/formFields' // EXTERNAL THIS OR ELSE :(

class PlayerProfileForm extends Component {
  constructor (props) {
    super(props);
    this.handleFile = ::this.handleFile;
  }

  handleFile(event) {
    const {id} = this.props.initialValues
    event.preventDefault();
    dialog.showOpenDialog({
      filters: [
        {name: 'Images', extensions: ['jpg', 'png', 'gif']},
      ],
      properties: ['openFile', 'openDirectory', 'multiSelections']}, (fileNames) => {
      if (fileNames === undefined) return;
      var fileName = fileNames[0];
      let avatarURI = ipcRenderer.sendSync('send_file', fileName, `player/${id}/avatar/`, fileName.split("/").pop(),`${uuid()}_avatar`);
      this.props.change('avatar_uri', avatarURI);
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <form className={`player_profile_form`} style={{display: 'block', overflow: 'hidden'}} onSubmit={handleSubmit}>
          <div className={`row`}>
            <div className={`col-xs-2`}>
              <div className={`row`}>
                <button className={`btn btn-info`} type="button" onClick={this.handleFile}>{`Change`}</button>
              </div>
            </div>
            <div className={`col-xs-10`}>
              <div className={`row`}>
                <Field name="player_name" wrapClass={`form-group col-xs-12`} component={renderTextField} type="text" label="Player Name"/>
                <Field name="email" wrapClass={`form-group col-xs-12`}component={renderTextField} type="email" label="E-Mail Address"/>
                <Field name="first_name" wrapClass={`form-group col-xs-6`} component={renderTextField} type="text" label="First Name"/>
                <Field name="last_name" wrapClass={`form-group col-xs-6`} component={renderTextField} type="text" label="Last Name"/>
                <Field name={`avatar_uri`}  component={renderTextField} type="hidden"/>
              </div>
              <hr/>
              <div className={`row`}>
                <button className={`btn btn-primary`} type="submit">Submit Changes</button>
              </div>
            </div>
          </div>
        </form>
    );
  }
}

export default reduxForm({
  form: 'player_profile'  // a unique identifier for this form
})(PlayerProfileForm)
