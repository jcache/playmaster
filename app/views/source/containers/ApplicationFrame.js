import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import ApplicationHeader from './ApplicationHeader';
import { Overlay } from './mainOverlay';
import {hashHistory, Link} from 'react-router';
class ApplicationFrame extends Component {

  constructor (props) {
    super(props);
    this.state = {
      scrollingClass: "small",
      scrollingVal: 0,
      scrollVal: 60,
      headerMaxScroll: 175,
      headerMinScroll: 60,
      overlayVisible: false,
    };
  }
  onDismissOverlay(){
    let { overlayVisible } = this.state
    this.setState({
      overlayVisible: false
    });
  }
  handleScroll() {
    let { headerMaxScroll, headerMinScroll } = this.state;
    var scroll_top = $(this.refs.scrollview).scrollTop();
    var container_height = $(this.refs.scrollview).height();
  }

  render() {
    let {scrollingClass, scrollingVal,scrollVal,headerMaxScroll, headerMinScroll, overlayVisible} = this.state
    return (
      <div className="ApplicationFrame container-fluid">
        <div className="bgImageContainer"></div>
        <div className={`ApplicationBody`}>
          <ApplicationHeader scrollingClass={scrollingClass} scrollingVal={scrollVal}/>
          <nav>
            <ul>
              <li><Link to={`/`}>Home</Link></li>
              <li><Link to={`character`} >Characters</Link></li>
              <li><Link to={`campaign`} >Campaigns</Link></li>
              <li><Link to={`game_system`} >Game Systems</Link></li>
            </ul>
          </nav>
          <div ref="scrollview" className={`AppView scroll3 ${this.state.scrollingVal}`} onScroll={() => this.handleScroll()}>
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
