import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  renderTextField,
  renderTextArea,
  renderFileField,
} from '../components/formFields' // EXTERNAL THIS OR ELSE :(

class CreateCharacterForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      avatarURI: ""
    }
    this.handleFile = ::this.handleFile;
  }

  handleFile(event) {
    console.log(event.target.files)
    for (let f of event.target.files) {
      this.setState({
        avatarURI: ipcRenderer.sendSync('send_file', f.path, "character_avatar/", f.name)
      })
    }
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
            <Field name={`characterAvatarURI`} wrapClass={`col-xs-6 form-group`} value={this.state.avatarURI} handleFile={this.handleFile} component={renderFileField} type="file" label="Character Avatar" />
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
