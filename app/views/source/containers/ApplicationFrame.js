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
    var sc = $(this.refs.appbody).scrollTop()
    if (sc > 60) {
      this.setState({
        scrollingClass: "small",
        scrollingVal: sc < 150 ? sc : 150
      });
    } else {
      this.setState({
        scrollingClass: "large",
        scrollingVal: sc
      });
    }

  }
  render() {
    let {scrollingClass, scrollingVal} = this.state
    return (
      <div className="ApplicationFrame container-fluid">
        <div ref="appbody" className={`ApplicationBody scroll3`} onScroll={() => this.handleScroll()}>
          <div className={`ApplicationHeader header-scroll ${this.state.scrollingClass}`}>
            <p>header</p>
          </div>
          <div className={`AppView ${this.state.scrollingVal}`} style={{marginTop: scrollingVal }} >
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
