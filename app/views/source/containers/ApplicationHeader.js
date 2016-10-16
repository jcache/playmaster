import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import DefaultHeader from '../components/defaultheader';

class ApplicationHeader extends Component {
  render() {
    let {scrollingClass, scrollingVal, headerMaxScroll, headerMinScroll} = this.props;
    const Style = { minHeight: scrollingVal < headerMinScroll ? headerMaxScroll : scrollingVal }
    return (
      <DefaultHeader
        Style={Style}
        scrollingClass={scrollingClass}
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
