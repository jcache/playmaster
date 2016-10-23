import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import ApplicationHeader from './ApplicationHeader';
import { Overlay } from './mainOverlay';
class ApplicationFrame extends Component {

  constructor (props) {
    super(props);
    this.state = {
      scrollingClass: "small",
      scrollingVal: 0,
      scrollVal: 60,
      overlayVisible: true,
      headerMaxScroll: 175,
      headerMinScroll: 60,
    };
  }
  onDismissOverlay(){
    this.setState({
      overlayVisible:false
    })
  }

  render() {
    let {scrollingClass, scrollingVal,scrollVal,headerMaxScroll, headerMinScroll, overlayVisible} = this.state
    return (
      <div className="ApplicationFrame container-fluid">
        <div className={`ApplicationBody`}>
          <ApplicationHeader scrollingClass={scrollingClass} scrollingVal={scrollVal}/>
          <div ref="scrollview" className={`AppView scroll3 ${this.state.scrollingVal}`}>
            {this.props.children}
            <Overlay visibility={overlayVisible} onDismissOverlay={() => this.onDismissOverlay()}></Overlay>
          </div>
        </div>
        <div className="ApplicationFooter"></div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(ApplicationFrame)
