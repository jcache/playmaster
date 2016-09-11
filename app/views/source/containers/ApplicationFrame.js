import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';

class ApplicationFrame extends Component {
  constructor (props) {
    super(props);
    this.state = {
      scrollingClass: "large",
      scrollingVal: 0,

    };
  }
  componentWillMount(){
    console.log(this.props) // props
  }
  handleScroll(){
    var sc = $(this.refs.scrollview).scrollTop()
    console.log(sc);
    if (sc > 150) {
      this.setState({
        scrollingClass: "small",
      });
    } else if(sc < 150) {
      this.setState({
        scrollingClass: "large",
      });
    }
  }
  render() {
    let {scrollingClass, scrollingVal} = this.state
    return (
      <div className="ApplicationFrame container-fluid">
        <div className={`ApplicationBody`}>
          <div className={`ApplicationHeader header-scroll ${this.state.scrollingClass}`}>
            <p>header</p>
          </div>
          <div
            ref="scrollview"
            className={`AppView scroll3 ${this.state.scrollingVal}`}
            style={{marginTop: scrollingVal }}
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
