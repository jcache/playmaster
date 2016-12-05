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

  openConversation(player, conversation_id) {
    console.log(player, conversation_id);
    const { BrowserWindow } = remote;
    let chatWindow = new BrowserWindow({
      backgroundColor: '#282c3a',
      width: 320,
      height: 800,
      minWidth: 320,
      // parent: parent,
      minHeight: 800,
      show: false,
      hasShadow: false,
      frame: false,
      enableLargerThanScreen: false,
      flashFrame: true,
      alwaysOnTop: true,
    });

    chatWindow.loadURL(`file://${path.join(__dirname, '../..')}/chat.html`);

    chatWindow.webContents.on('did-finish-load', () => {
      chatWindow.setTitle('evolition | chat');
    });

    chatWindow.show();



    // ipcRenderer.send(`openConversation`,player, conversation_id);
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
            {conversations.map((c,i) => <ChatBubble key={i} conversation={c} openConversation={(p,cid) => this.openConversation(p,cid) } />)}
          </div>
        </div>
      </div>
    );
  }
}


export default ChatDisplay
