import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
export const DisplaySkill = (props) => {
  return (
    <Motion defaultStyle={{x: 0}} style={{x: spring(1, {stiffness: 120, damping: 5})}}>
      {
        value =>
          <div className={`skill`}>
            <div className={`skill-bonus`}>{`+${props.val}`}</div>
            <div className={`skill-name`}>{props.name} <span className={`pull-right`}>({props.abbv})</span></div>
          </div>
      }
    </Motion>
  );
}
