import React from "react";

class Header extends React.Component {

    constructor (props) {
      super(props);
    }

    render () {
      let tabClass;
      if (this.props.index === this.props.tabIndex) {
        tabClass = "tab-header-title active";
      } else {
        tabClass = "tab-header-title";
      }

      return (
        <span className={tabClass} 
        onClick={() => this.props.updateTabIndex(this.props.index)}>
        {this.props.title}</span>

      )

    }


    

}

export default Header;