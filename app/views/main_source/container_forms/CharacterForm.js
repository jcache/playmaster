import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  renderTextField,
  renderTextArea,
} from '../components/formFields' // EXTERNAL THIS OR ELSE :(

class CreateCharacterForm extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
      <div className="row form-conjoined">
        <div className='col-xs-12 form-group form-special-1'>
          <Field name="characterName" component={renderTextField} type="text" label="Character Name" required={`required`}/>
        </div>
        <div className='col-xs-6 form-group'>
          <Field name={`stats.strength`} component={renderTextField} type="number" label="Strength"/>
        </div>
        <div className='col-xs-6 form-group'>
          <Field name={`stats.dexterity`} component={renderTextField} type="number" label="Dexterity"/>
        </div>
        <div className='col-xs-6 form-group'>
          <Field name={`stats.constitution`} component={renderTextField} type="number" label="Constitution"/>
        </div>
        <div className='col-xs-6 form-group'>
          <Field name={`stats.intelligence`} component={renderTextField} type="number" label="Intelligence"/>
        </div>
        <div className='col-xs-6 form-group'>
          <Field name={`stats.wisdom`} component={renderTextField} type="number" label="Wisdom"/>
        </div>
        <div className='col-xs-6 form-group'>
          <Field name={`stats.charisma`} component={renderTextField} type="number" label="Charisma"/>
        </div>
      </div>
        <button className={`btn btn-primary`} type="submit">Next</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'character'  // a unique identifier for this form
})(CreateCharacterForm)
