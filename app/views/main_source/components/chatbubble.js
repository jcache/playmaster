import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { IoChevronLeft, IoChevronRight,IoNavicon } from 'react-icons/lib/io';
import {Motion, spring} from 'react-motion';

export const ChatBubble = (props) => {
  let { conversation , openConversation} = props;
  return (
    <Motion defaultStyle={{x: 0}} style={{x: spring(1, {stiffness: 120, damping: 5})}}>
      {
        value =>
          <div className={`chatBubble `}
            style={{opacity: `${value.x}`}}
            // onClick={()=> openConversation(conversation.id, conversation.pid) }
            >
            <div className={`playerAvatar`} style={{backgroundImage: `url('${conversation.AvatarUri}')`}}/>
            <div className={`playerContentHolder`}>
              <h2>thing one test title </h2>
              <h3>thing one test title</h3>
            </div>
            <IoChevronRight className={`indicator`}/>
          </div>
      }
    </Motion>
  );
}
