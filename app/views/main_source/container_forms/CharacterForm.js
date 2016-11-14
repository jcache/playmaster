import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import fs from 'fs-extra';
let {dialog} = remote;
import {
  renderTextField,
  renderTextArea,
  renderFileField,
} from '../components/formFields' // EXTERNAL THIS OR ELSE :(

class CreateCharacterForm extends Component {
  constructor (props) {
    super(props);

    this.handleFile = ::this.handleFile;
  }

  handleFile(event) {
    event.preventDefault();
    dialog.showOpenDialog({
      filters: [
        {name: 'Images', extensions: ['jpg', 'png', 'gif']},
      ],
      properties: ['openFile', 'openDirectory', 'multiSelections']}, (fileNames) => {
      // console.log(fileNames);
      if (fileNames === undefined) return;
      var fileName = fileNames[0];
      let avatarURI = ipcRenderer.sendSync('send_file', fileName, "character_avatar/", fileName.split("/").pop());
      console.log(avatarURI);
      this.props.change('AvatarUri', avatarURI);
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <form className={`character_form`} style={{display: 'block', overflow: 'hidden'}} onSubmit={handleSubmit}>
          <div className={`col-xs-2`}>
            <div className={`row`}>
              <Field name={`stats.strength`} wrapClass={`col-xs-12 form-group`} component={renderTextField} type="number" label="Strength"/>
              <Field name={`stats.dexterity`} wrapClass={`col-xs-12 form-group`} component={renderTextField} type="number" label="Dexterity"/>
              <Field name={`stats.constitution`} wrapClass={`col-xs-12 form-group`} component={renderTextField} type="number" label="Constitution"/>
              <Field name={`stats.intelligence`} wrapClass={`col-xs-12 form-group`} component={renderTextField} type="number" label="Intelligence"/>
              <Field name={`stats.wisdom`} wrapClass={`col-xs-12 form-group`} component={renderTextField} type="number" label="Wisdom"/>
              <Field name={`stats.charisma`} wrapClass={`col-xs-12 form-group`} component={renderTextField} type="number" label="Charisma"/>
            </div>
          </div>
          <div className={`col-xs-8`}>
            <div className={`row`}>
              <Field name={`AvatarUri`} wrapClass={`col-xs-12 form-group`} component={renderTextField} type="hidden" label="Charisma"/>
              <Field name={`characterName`} wrapClass={`col-xs-6 form-group`} component={renderTextField} type="text" label="Character Name" required={`required`}/>
              <Field name={`characterRace`} wrapClass={`col-xs-6 form-group`} component={renderTextField} type="text" label="Character Race" />
            </div>
            <div className={`row`}>
              <Field name={`characterAge`} wrapClass={`col-xs-2 form-group`} component={renderTextField} type="number" label="Age" />
              <Field name={`characterHeight`} wrapClass={`col-xs-2 form-group`} component={renderTextField} type="number" label="Height" />
              <Field name={`characterWeight`} wrapClass={`col-xs-2 form-group`} component={renderTextField} type="number" label="Weight" />
              <Field name={`characterProfession`} wrapClass={`col-xs-6 form-group`} component={renderTextField} type="text" label="Profession" />
            </div>
            <div className={`row`}>
            <button className={`btn btn-info`} type="button" onClick={this.handleFile}>{`Upload an Avatar`}</button>
            </div>
          </div>
          <div className={`col-xs-12`}>
            <div className={`row`}>
              <button className={`btn btn-primary`} type="submit">Next</button>
            </div>
          </div>
        </form>
    );
  }
}

export default reduxForm({
  form: 'character'  // a unique identifier for this form
})(CreateCharacterForm)
