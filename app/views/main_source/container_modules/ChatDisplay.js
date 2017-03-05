import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight,IoNavicon } from 'react-icons/lib/io';
import { ChatBubble } from '../components/chatbubble.js';
const path = require('path');
class ChatDisplay extends Component {

  constructor (props) {
    super(props);
  }

  render(){
    let { conversations } = this.props;
    return (
      <div className='Chat Module '>
        <hgroup className='ModuleHeader deep-purple'>
          <h3>Conversations</h3>
          <IoNavicon size={28} className={`pull-right HamburgNav`} color={`rgba(255,255,255,1)`}/>
        </hgroup>
        <div className="chatContainer">
          <div className={`ChatBody scroll3`}>
            {conversations.map((c,i) => <ChatBubble key={i} conversation={c}  />)}
          </div>
        </div>
      </div>
    );
  }
}


export default ChatDisplay
