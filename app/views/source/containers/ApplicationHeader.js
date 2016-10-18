import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import DefaultHeader from '../components/DefaultHeader';
const {BrowserWindow} = require('electron').remote


class ApplicationHeader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      maximizeValue: false,
    };
  }

  onCloseApp(){
   ipcRenderer.send('app_close')
  }

  onMinimizeToggle(){
    ipcRenderer.send('app_minimize')
  }

  onMaximizeToggle(){
    let { maximizeValue } = this.state;
    this.setState({
      maximizeValue: !maximizeValue
    });
    ipcRenderer.send('app_maximize', !maximizeValue)
  }

  render() {
    let {scrollingClass, scrollingVal, headerMaxScroll, headerMinScroll} = this.props;
    const Style = { minHeight: scrollingVal < headerMinScroll ? headerMaxScroll : scrollingVal }
    return (
      <DefaultHeader
        Style={Style}
        scrollingClass={scrollingClass}
        onCloseApp={() => this.onCloseApp()}
        onMaximizeToggle={() => this.onMaximizeToggle()}
        onMinimizeToggle={() => this.onMinimizeToggle()}
        scrollingVal={scrollingVal}
        headerMaxScroll={headerMaxScroll}
        headerMinScroll={headerMinScroll} />
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(ApplicationHeader)
