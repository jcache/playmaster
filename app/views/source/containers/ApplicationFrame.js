import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import ApplicationHeader from './ApplicationHeader';
class ApplicationFrame extends Component {

  constructor (props) {
    super(props);
    this.state = {
      scrollingClass: "small",
      scrollingVal: 0,
      scrollVal: 60,
      headerMaxScroll: 175,
      headerMinScroll: 60,
    };
  }

  handleScroll() {
    let { headerMaxScroll, headerMinScroll } = this.state;
    var scroll_top = $(this.refs.scrollview).scrollTop();
    var container_height = $(this.refs.scrollview).height();
  }

  render() {
    let {scrollingClass, scrollingVal,scrollVal,headerMaxScroll, headerMinScroll} = this.state
    return (
      <div className="ApplicationFrame container-fluid">
        <div className={`ApplicationBody`}>
          <ApplicationHeader scrollingClass={scrollingClass} scrollingVal={scrollVal}/>
          <nav>
            <ul>
              <li><a onClick={()=> {alert('clicked')}}>Home</a></li>
              <li><a onClick={()=> {alert('clicked')}}>Characters</a></li>
              <li><a onClick={()=> {alert('clicked')}}>Campaigns</a></li>
              <li><a onClick={()=> {alert('clicked')}}>Game Systems</a></li>
            </ul>
          </nav>
          <div ref="scrollview" className={`AppView scroll3 ${this.state.scrollingVal}`} onScroll={() => this.handleScroll()}>
            {this.props.children}
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
