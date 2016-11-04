import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  renderTextField,
  renderTextArea,
} from '../components/formFields' // EXTERNAL THIS OR ELSE :(
const colors = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet' ]

class CreateProfileForm extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="player_name" component={renderTextField} type="text" label="Player Name"/>
          <Field name="first_name" component={renderTextField} type="text" label="First Name"/>
          <Field name="last_name" component={renderTextField} type="text" label="Last Name"/>
          <Field name="email" component={renderTextField} type="email" label="E-Mail Address"/>

        </div>
        <button className={`btn btn-primary`} type="submit">Next</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'contact'  // a unique identifier for this form
})(CreateProfileForm)
