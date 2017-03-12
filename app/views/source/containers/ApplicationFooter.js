import React, { Component } from 'react';
import { connect}  from 'react-redux';

class ApplicationFooter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      overlay: false,
    };
  }

  render() {
    let {overlay} = this.state
    return (
      <div className={`ApplicationFooter`}>
        <p>evolition</p>
      </div>
    );
  }
}

export default connect()(ApplicationFooter)
