import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  renderTextField,
  renderTextArea,
} from '../components/formFields' // EXTERNAL THIS OR ELSE :(

class PlayerCreateForm extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { handleSubmit, onFacebookAuth } = this.props;
    return (
      <div className="form">
        <div className="fbButtonContainer">
          <button className={`btn btn-primary`} type="submit" onClick={onFacebookAuth}>Sign in with Facebook</button>
        </div>
        <h3>OR</h3>
        <form onSubmit={handleSubmit}>
          <Field name="login" component={renderTextField} wrapClass="form-group" type="text" placeholder="Player Login" />
          <Field name="password" component={renderTextField} wrapClass="form-group" type="password" placeholder="Password" />
<br/>
          <div className="form-group">
            <button className={`btn btn-primary`} type="submit">ENTER</button>
          </div>
        </form>

      </div>
    );
  }
}

export default reduxForm({
  form: 'player_form'  // a unique identifier for this form
})(PlayerCreateForm)
