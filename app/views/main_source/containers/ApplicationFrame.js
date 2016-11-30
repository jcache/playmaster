import React, { Component } from 'react';
import { connect}  from 'react-redux';
import { Overlay } from './mainOverlay';
class ApplicationFrame extends Component {
  constructor (props) {
    super(props);
    this.state = {
      overlay: false,
    };
  }

  render() {
    let { overlay } = this.state;
    return (
      <div ref="scrollview" className={`AppView scroll3 `}>
        {this.props.children}
        <Overlay visibility={overlay} onDismissOverlay={() => this.setState({overlay: !overlay})}></Overlay>
      </div>
    );
  }
}

export default connect()(ApplicationFrame)
