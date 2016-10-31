import React, { Component } from 'react';
export default class DefaultView extends Component {
  render() {
    return (
      <div className="DefaultView">
        {this.props.children}
      </div>
    );
  }
}
