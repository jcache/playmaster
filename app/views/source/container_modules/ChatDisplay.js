import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';


const ChatDisplay = (props) => {
  return (
    <div className='Chat Module '>
      <hgroup className='ModuleHeader'>
        <h3>Chat</h3>
      </hgroup>
      <div className="chatContainer">
        <div className={`ChatBody scroll3`}>
          <div className={`chatBubble left`}>asdf</div>
          <div className={`chatBubble right`}>asdf</div>
          <div className={`chatBubble left`}>asdf</div>
          <div className={`chatBubble right`}>asdf</div>
          <div className={`chatBubble left`}>asdf</div>
        </div>
        <textarea placeholder={`type something + press enter `}/>
      </div>
    </div>
  );
}



export default ChatDisplay
