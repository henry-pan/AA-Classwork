import React from "react";

class Clock extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      date: new Date()
    }

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }


  render() {
    let time = this.state.date.toLocaleTimeString();
    let date = this.state.date.toDateString();
    return (
      <div>
        <h1 className="clock-title">Clock</h1>
        <div className="clock">
          <div className="time">
            <div>Time:</div>
            <div>{time}</div>
          </div>
          <div className="date">
            <div>Date:</div>
            <div>{date}</div>
          </div>
        </div>
        
      </div>
    );


  }

}













export default Clock;