import React from "react";
import Header from "./header";

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: 0
    }

    this.updateTabIndex = this.updateTabIndex.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  updateTabIndex (index) {
    this.setState({tabIndex: index});
  }

  render () {

    const tabTitles = this.props.array.map((tab, index) => {
      return <Header
        key = {`${index}-${tab}`}
        index = {index}
        tabIndex = {this.state.tabIndex}
        title = {tab.title} 
        updateTabIndex = {this.updateTabIndex}/>;
    });



    return (
      <div className ="tabs-container">
        <h1 className="title">Tabs</h1>
        <div className="tab-header">
          {tabTitles}
        </div>
        <article className="tab-content">
          {this.props.array[this.state.tabIndex].content}
        </article>
      </div>

    ) 

  }

}

export default Tabs;