import React from "react";

// class Header extends React.Component {
const Header = (props) => {
  // constructor (props) {
  //   super(props);
  // }

  // render () {
    let tabClass;
    if (props.index === props.tabIndex) {
      tabClass = "tab-header-title active";
    } else {
      tabClass = "tab-header-title";
    }

    return (
      <span className={tabClass} 
      onClick={() => props.updateTabIndex(props.index)}>
      {props.title}</span>

    )
  // }
}

export default Header;