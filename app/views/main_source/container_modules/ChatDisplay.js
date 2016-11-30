import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight,IoNavicon } from 'react-icons/lib/io';
import { ChatBubble } from '../components/chatbubble.js'
class ChatDisplay extends Component {

  constructor (props) {
    super(props);
  }

  openConversation(player, conversation_id) {
    console.log(player, conversation_id)
    ipcRenderer.send(`openConversation`,player, conversation_id);
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
