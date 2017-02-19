import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { DisplaySkill }  from '../components/character/display_skill';
import { Field, reduxForm } from 'redux-form';
import { IoNavicon } from 'react-icons/lib/io';
import fs from 'fs-extra';
let {dialog} = remote;

import {
  renderTextField,
  renderTextArea,
  renderFileField,
} from '../components/formFields' // EXTERNAL THIS OR ELSE :(

import * as cform from '../components/character/formFields' // EXTERNAL THIS OR ELSE :(

class CreateCharacterForm extends Component {
  constructor (props) {
    super(props);
    this.handleFile = ::this.handleFile;
  }

  handleFile(event) {
    const {id, pid} = this.props.initialValues;
    event.preventDefault();
    dialog.showOpenDialog({
      filters: [
        {name: 'Images', extensions: ['jpg', 'png', 'gif']},
      ],
      properties: ['openFile', 'openDirectory', 'multiSelections']}, (fileNames) => {
      if (fileNames === undefined) return;
      var fileName = fileNames[0];
      let avatarURI = ipcRenderer.sendSync('send_file', fileName, `player/${pid}/character/${id}/`, fileName.split("/").pop(), "avatar");
      console.log(this.props);
      this.props.change('AvatarUri', avatarURI);
    });
  }

  render() {
    const { handleSubmit } = this.props;
    let character = this.props.initialValues;
    return (
        <form className={`character_form`} onSubmit={handleSubmit}>
          <div className="DnD5echaracterView">
            <div className={`section`}>
              <div className={`health-box`}>

                <div style={{ backgroundImage: 'url(' + character.AvatarUri + ')' }}
                  className="characterAvatar" >
                </div>

              </div>
              <div className={`experience-box`}>
                <ul>
                  <Field name={`characterName`} wrapClass={`col-xs-2 form-group`} component={cform.TextField} type="text" label="Character Name" />
                  <Field name={`characterClass`} wrapClass={`col-xs-2 form-group`} component={cform.TextField} type="text" label="Profession" />
                  <Field name={`charcterRace`} wrapClass={`col-xs-2 form-group`} component={cform.TextField} type="text" label="Race" />
                  <Field name={`characterAlignment`} wrapClass={`col-xs-2 form-group`} component={cform.TextField} type="text" label="Alignment" />
                </ul>
              </div>
            </div>
            <div className={`section`}>
              <div className={`stat-box`}>
                <div className={`stat-box-row`}>
                  <Field name={`stats.strength`} component={cform.displayStatContainer} type="number" label="Strength" />
                  <Field name={`stats.dexterity`} component={cform.displayStatContainer} type="number" label="Dexterity" />
                  <Field name={`stats.constitution`} component={cform.displayStatContainer} type="number" label="Constitution" />
                </div>
                <div className={`stat-box-row`}>
                  <Field name={`stats.intelligence`} component={cform.displayStatContainer} type="number" label="Intelligence" />
                  <Field name={`stats.wisdom`} component={cform.displayStatContainer} type="number" label="Wisdom" />
                  <Field name={`stats.charisma`} component={cform.displayStatContainer} type="number" label="Charisma" />
                </div>
                {
                  /*
                  <div className={`stat-box-row`}>
                  {this.displayStatContainer(`Strength`, character.stats.strength || `--`)}
                  {this.displayStatContainer(`Dexterity`, character.stats.dexterity || `--`)}
                  {this.displayStatContainer(`Constitution`, character.stats.constitution || `--`)}
                  </div>

                  <div className={`stat-box-row`}>
                  {this.displayStatContainer(`Intelligence`, character.stats.intelligence || `--`)}
                  {this.displayStatContainer(`Wisdom`, character.stats.wisdom || `--`)}
                  {this.displayStatContainer(`Charisma`, character.stats.charisma || `--`)}
                  </div>
                  */
                }

                <div className={`content-box`}>
                  <hgroup className='ModuleHeader'>
                    <h3>Features & Traits</h3>
                  </hgroup>
                  <Field name={`biography`} wrapClass={`col-xs-2 form-group`} component={cform.FeatureAndTraits} type="text" label="biography" />
                </div>

                <div className={`content-box`} style={{flexDirection: 'row', marginTop: 30, backgroundColor: 'transparent'}}>
                  <div style={{
                    flex: 1,
                    display: 'flex',
                    minHeight: 100,
                  backgroundColor: 'rgba(45, 45, 45, 1.00)'}}></div>

                  <div style={{
                    flex: 1,
                    display: 'flex',
                    minHeight: 100,
                  backgroundColor: 'rgba(45, 45, 45, 1.00)', marginLeft: 30}}></div>
                </div>
              </div>

              <div className={`info-box`}>
                <div className={`physical-info`}>
                  <ul>
                    <li>
                      <strong>Armor Class</strong>
                      <span> {character.armor_class || 20} </span>
                    </li>
                    <li>
                      <strong>Initiative</strong>
                      <span> {character.initiative || `+4`}  </span>
                    </li>
                    <li>
                      <strong>Max Speed</strong>
                      <span> {character.speed || `40`} </span>
                    </li>
                  </ul>
                </div>
                <div className={`skills`}>
                  <hgroup className='ModuleHeader'>
                    <h3>Skills</h3>
                    <IoNavicon
                      size={28}
                      className={`pull-right HamburgNav`}
                      color={`rgba(255,255,255,1)`}/>
                  </hgroup>
                  <div className={`skill-list scroll3`}>
                    <DisplaySkill name={`Acrobatics`} abbv={`DEX`} val={5}/>
                  </div>
                </div>
              </div>
            </div>
            {/* <p>{`I am ${character.characterName}`}</p> */}
            {/* <Link className={`btn btn-primary`} onClick={() => {this.context.router.goBack() }}>Go Back</Link> */}
          </div>
          {/*



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
            <Field name={`AvatarUri`} wrapClass={`col-xs-12 form-group`} component={renderTextField} type="hidden"/>
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
          */}
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
