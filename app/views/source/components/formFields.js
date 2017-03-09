import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';




export const renderTextField = ({ input, label, wrapClass, type, meta: { touched, error, warning } }) => (
  <div className={`${wrapClass}`}>
    <label data-error="wrong" data-success="right" className={`control-label`}>{label}</label>
    <input {...input} type={type} className={`form-control validate`}/>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

export const renderFileField = ({ input, label, wrapClass, handleFile, type, meta: { touched, error, warning } }) => (
  <div className={`${wrapClass}`}>
    <label data-error="wrong" data-success="right" className={`control-label`}>{label}</label>
    <input {...input} rel={`file`} type={type} className={`form-control validate`} onClick={handleFile}/>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

export const renderTextArea = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={`row`}>
    <div className={`input-field col s12`}>
      <label data-error="wrong" data-success="right">Textarea</label>
      <textarea id="textarea1" className={`materialize-textarea`}></textarea>
    </div>
  </div>
)
