import React, { Component } from 'react';

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={`row`}>
    <div className={`input-field col s12`}>
      <input {...input} type={type} className="validate"/>
      <label data-error="wrong" data-success="right">{label}</label>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)
