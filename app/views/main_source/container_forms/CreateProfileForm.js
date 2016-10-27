import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class CreateProfileForm extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;
    const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type}/>
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    )

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="player_name" component={renderField} type="text" label="Player Name"/>
          <Field name="first_name" component={renderField} type="text" label="First Name"/>
          <Field name="last_name" component={renderField} type="text" label="Last Name"/>
          <Field name="email" component={renderField} type="email" label="E-Mail Address"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'contact'  // a unique identifier for this form
})(CreateProfileForm)
