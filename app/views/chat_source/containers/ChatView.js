import React, { Component } from 'react';

class ChatView extends Component {
  render() {
    return (
      <div style={{flex: 1, display: 'flex'}}>
        <hgroup>
          <h3>Chat View</h3>
        </hgroup>
        <div className="Layout scroll3">
        </div>
      </div>
    );
  }
}

export default ChatView;
