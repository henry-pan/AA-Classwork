import React from 'react';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleShowStatus = this.handleShowStatus.bind(this);
  }

  handleShowStatus() {
    this.props.step.done = !this.props.step.done;
    this.props.receiveStep(this.props.step);
    this.setState({ state: this.state });
  }

  render() {
    let status = this.props.step.done ? "Undo" : "Done";

    return (
      <li><h1>{this.props.step.title}</h1>
        <p>{this.props.step.body}</p>
        <button onClick={this.handleShowStatus}>{status}</button>
        <button onClick={ () => this.props.removeStep(this.props.step)}>Delete Step</button>
      </li>
    )
  }
}

export default StepListItem;