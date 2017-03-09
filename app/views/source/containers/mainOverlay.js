import React, { Component } from 'react';
import { MdClose} from 'react-icons/lib/md';
export const Overlay = ({visibility, onDismissOverlay}) => {
  if(visibility == true){
    return (
      <div className={`overlay`}>
        <div className={`settings-view`}>
          <h2>Overlay Power</h2>
          <p>This is a test for Ovelays</p>
          <a className={`bn-close`} onClick={() => onDismissOverlay()}><MdClose/></a>
        </div>
      </div>
    );
  } else {
    return false;
  }
}
