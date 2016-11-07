import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  renderTextField,
  renderTextArea,
} from '../components/formFields' // EXTERNAL THIS OR ELSE :(

class EditCharacterForm extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="characterName" component={renderTextField} type="text" label="Character Name"/>
          <Field name="characterProfession" component={renderTextField} type="text" label="Character Profession"/>
        </div>
        <button className={`btn btn-primary`} type="submit">Next</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'character'  // a unique identifier for this form
})(EditCharacterForm)
