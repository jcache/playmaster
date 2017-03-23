import React, { Component } from 'react';
import { connect}  from 'react-redux';
import { FaHeart } from 'react-icons/lib/fa';
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
        <p>Created with <FaHeart className={`heart`}/> by Evolition LLC</p>
      </div>
    );
  }
}

export default connect()(ApplicationFooter)
