import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { IoChevronLeft, IoChevronRight,IoNavicon } from 'react-icons/lib/io';

export const ChatBubble = (props) => {
  let {player} = props;
  return (
    <div className={`chatBubble `}>
      <div className={`playerAvatar`} style={{backgroundImage: `url('./images/rogue.jpg')`}}></div>
      <div className={`playerContentHolder`} >
        <h2>thing one test title</h2>
        <h3>thing one test title</h3>
      </div>
      <IoChevronRight className={`indicator`}/>
    </div>
  );
}
