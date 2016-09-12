import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import ApplicationHeader from './ApplicationHeader';
class ApplicationFrame extends Component {

  constructor (props) {
    super(props);
    this.state = {
      scrollingClass: "large",
      scrollingVal: 0,
      headerMaxScroll: 175,
      headerMinScroll: 60,
    };
  }

  handleScroll(){
    let { headerMaxScroll, headerMinScroll } = this.state;
    var sc = $(this.refs.scrollview).scrollTop()
    if (sc <= headerMinScroll) {
      this.setState({
        scrollingClass: "large",
        scrollingVal: headerMaxScroll,
      });
    } else if(sc >= headerMinScroll && sc < headerMaxScroll  ){
      this.setState({
        scrollingClass: "small",
        scrollingVal: sc,
      });
    } else {
      this.setState({
        scrollingClass: "small",
        scrollingVal: headerMinScroll,
      });
    }
  }

  render() {
    let {scrollingClass, scrollingVal,headerMaxScroll, headerMinScroll} = this.state
    return (
      <div className="ApplicationFrame container-fluid">
        <div className={`ApplicationBody`}>

          <ApplicationHeader scrollingClass={scrollingClass} scrollingVal={scrollingVal} headerMaxScroll={headerMaxScroll} headerMinScroll={headerMinScroll}/>

          <div ref="scrollview"
            className={`AppView scroll3 ${this.state.scrollingVal}`}
            onScroll={() => this.handleScroll()}>
            {this.props.children}
          </div>
        </div>
        <div className="ApplicationFooter">footer</div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(ApplicationFrame)
