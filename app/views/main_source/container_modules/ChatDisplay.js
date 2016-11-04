import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoChevronLeft, IoChevronRight,IoNavicon } from 'react-icons/lib/io';


const ChatDisplay = (props) => {
  return (
    <div className='Chat Module '>
    <hgroup className='ModuleHeader deep-purple'>
      <IoNavicon size={28} className={`HamburgNav`} color={`rgba(255,255,255,1)`}/>
      <h3>Conversations</h3>
    </hgroup>
      <div className="chatContainer">
        <div className={`ChatBody scroll3`}>

          <div className={`chatBubble `}>
            <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
            <div className={`playerContentHolder`} >
              <h2>thing one test title</h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>

          <div className={`chatBubble `}>
            <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
            <div className={`playerContentHolder`} >
              <h2>thing one test title</h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>

          <div className={`chatBubble `}>
            <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
            <div className={`playerContentHolder`} >
              <h2>thing one test title</h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>

          <div className={`chatBubble `}>
            <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
            <div className={`playerContentHolder`} >
              <h2>thing one test title</h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>

          <div className={`chatBubble `}>
            <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
            <div className={`playerContentHolder`} >
              <h2>thing one test title</h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>

          <div className={`chatBubble `}>
            <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
            <div className={`playerContentHolder`} >
              <h2>thing one test title</h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>

          <div className={`chatBubble `}>
            <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
            <div className={`playerContentHolder`} >
              <h2>thing one test title</h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>

          <div className={`chatBubble `}>
            <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
            <div className={`playerContentHolder`} >
              <h2>thing one test title</h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>

          <div className={`chatBubble `}>
            <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
            <div className={`playerContentHolder`} >
              <h2>thing one test title</h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>

          <div className={`chatBubble `}>
            <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
            <div className={`playerContentHolder`} >
              <h2>thing one test title</h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>

          <div className={`chatBubble `}>
            <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
            <div className={`playerContentHolder`} >
              <h2>thing one test title</h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>

          <div className={`chatBubble `}>
            <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
            <div className={`playerContentHolder`} >
              <h2>thing one test title</h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>

          <div className={`chatBubble `}>
            <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
            <div className={`playerContentHolder`} >
              <h2>thing one test title</h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>

          <div className={`chatBubble `}>
            <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
            <div className={`playerContentHolder`} >
              <h2>thing one test title</h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>

        </div>
      </div>
    </div>
  );
}



export default ChatDisplay
