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

  handleScroll(){
    let { headerMaxScroll, headerMinScroll } = this.state;
    var scroll_top = $(this.refs.scrollview).scrollTop();
    var container_height = $(this.refs.scrollview).height();
    // if(scroll_top > 2){
    //   this.setState({
    //     scrollingClass: "small" ,
    //     scrollVal: headerMinScroll - 2 ,
    //   });
    // } else if(scroll_top < headerMinScroll / 2){
    //
    //   this.setState({
    //     scrollingClass: "large" ,
    //     scrollVal: headerMaxScroll + 1 ,
    //   });
    // }else if(container_height < headerMaxScroll){
    //   this.setState({
    //     scrollingClass: "small" ,
    //     scrollVal: headerMinScroll  + 10 ,
    //
    //   });
    // }
  }

  render() {
    let {scrollingClass, scrollingVal,scrollVal,headerMaxScroll, headerMinScroll} = this.state
    return (
      <div className="ApplicationFrame container-fluid">
        <div className={`ApplicationBody`}>
          <ApplicationHeader scrollingClass={scrollingClass} scrollingVal={scrollVal}/>
          <div ref="scrollview" className={`AppView scroll3 ${this.state.scrollingVal}`} onScroll={() => this.handleScroll()}>
            {this.props.children}
          </div>
        </div>
        <div className="ApplicationFooter">

        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {ipc: ipcRenderer}
}
export default connect(mapStateToProps)(ApplicationFrame)
