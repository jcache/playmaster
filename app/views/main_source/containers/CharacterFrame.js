import React, { Component } from 'react';
export default class CharacterFrame extends Component {
  render() {
    return (
      <div className="DefaultView">
        {this.props.children}
      </div>
    );
  }
}
