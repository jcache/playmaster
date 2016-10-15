import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { IoMinus, IoPlus, IoClose, IoIosSearchStrong, IoIosGear, IoChevronDown } from 'react-icons/lib/io';

class ApplicationHeader extends Component {
  render() {
    let {scrollingClass, scrollingVal,headerMaxScroll, headerMinScroll} = this.props;
    const Style = { minHeight: scrollingVal < headerMinScroll ? headerMaxScroll : scrollingVal }
    return (
      <div className={`ApplicationHeader header-scroll ${scrollingClass}`} style={Style}>
        <ul className={`AppControl`}>
          <li><a href="#"><IoClose/></a></li>
          <li><a href="#"><IoPlus/></a></li>
          <li><a href="#"><IoMinus/></a></li>
        </ul>
        <ul className={`AppControlUtils`}>
          <li className="SearchIcon"><a href="#"><IoIosSearchStrong/></a></li>
          <li className="SettingsIcon"><a href="#"><IoIosGear/></a></li>
          <li className="ProfileDropdown">
            <a href="#">test</a>
          </li>
          <li className="ProfileBn"><a href="#"><IoChevronDown/></a></li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(ApplicationHeader)
