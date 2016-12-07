import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';

export const FeatureAndTraits = ({ input, label, type, meta: { touched, error, warning } }) => (
  <textarea {...input} className={`materialize-textarea validate`}></textarea>
);

export const TextField = ({ input, label, wrapClass, type, meta: { touched, error, warning } }) => (
  <li>
    <input {...input} type={type} className={`validate`} placeholder={label}/>
  </li>
);


export const displayStatContainer = ({ input, label, wrapClass, type, meta: { touched, error, warning } }) => (
  <div className={`stat-container sm`}>
    <div>
      <div className={`stat-field`}>
        <h2>{label}</h2>
        <input {...input} type={type} className={`validate`} min="1" max="20" pattern="[1-20]*" maxLength="2" placeholder={`--`} />
      </div>
    </div>
  </div>
);
