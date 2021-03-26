import React from 'react';
import uniqueId from '../../util';

class StepForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uniqueId(),
      title: '',
      body: '',
      done: false,
      todo_id: props.todo_id
    }

    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleBody(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveStep(this.state);
    this.setState({ id: uniqueId(), title: '', body: '', done: false, todo_id: this.props.todo_id });
  }

  render() {
    return (
      <div>
        <h1>Add a Step</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input onChange={this.handleTitle} type="text" value={this.state.title} />
          </label>

          <label>Body:
            <input onChange={this.handleBody} type="text" value={this.state.body} />
          </label>

          <input type="submit" value='Add the Step' />
        </form>
      </div>
    )
  }
}

export default StepForm;