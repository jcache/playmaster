import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight,IoNavicon } from 'react-icons/lib/io';


const ChatDisplay = (props) => {
  return (
    <div className='Chat Module '>
      <hgroup className='ModuleHeader'>
      <div className='Chat Module '>
        <hgroup className='ModuleHeader'>
          <IoNavicon size={28} className={`HamburgNav`} color={`rgba(255,255,255,1)`}/>

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
