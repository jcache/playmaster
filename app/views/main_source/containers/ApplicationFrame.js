import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import ApplicationHeader from './ApplicationHeader';
import { Overlay } from './mainOverlay';
class ApplicationFrame extends Component {

  constructor (props) {
    super(props);
    this.state = {
      overlayVisible: false,
    };
  }

  onDismissOverlay(){
    this.setState({
      overlayVisible:false
    })
  }

  render() {
    let {overlayVisible} = this.state
    return (
      <div className="ApplicationFrame container-fluid">
        <div className={`ApplicationBody`}>
          <ApplicationHeader />
          <div ref="scrollview" className={`AppView scroll3 `}>
            {this.props.children}
            <Overlay visibility={overlayVisible} onDismissOverlay={() => this.onDismissOverlay()}></Overlay>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(ApplicationFrame)
