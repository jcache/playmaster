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
  <div className={`stat-container`}>
    <div>
      <div className={`stat-header`}>
        <h2>{label}</h2>
        <input {...input} type={type} className={`validate`} min="1" max="20" pattern="[1-20]*" maxLength="2" placeholder={`--`}/>
      </div>
      <div className={`stat-bonus`}>
        <h1>10</h1>
      </div>
      <div className={`stat-other-bonus-container`}>
        <div>
          <h6>Base</h6>
          <span>15</span>
        </div>
        <div>
          <h6>Racial</h6>
          <span>+15</span>
        </div>
        <div>
          <h6>Inc.</h6>
          <span>-15</span>
        </div>
      </div>
    </div>
  </div>
);
