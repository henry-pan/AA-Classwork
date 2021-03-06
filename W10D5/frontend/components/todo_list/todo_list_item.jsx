import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';


class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { detail: false }

    this.handleShowDetail = this.handleShowDetail.bind(this);
    this.handleShowStatus = this.handleShowStatus.bind(this);
  }

  handleShowDetail() {
    this.setState({ detail: !this.state.detail});
  }

  handleShowStatus() {
    this.props.todo.done = !this.props.todo.done;
    this.props.receiveTodo(this.props.todo);
  }

  render() {
    let status = this.props.todo.done ? "Undo" : "Done";

    return (
      <li className="list-item"><h1 onClick={this.handleShowDetail}>{this.props.todo.title}</h1>
        <button onClick={this.handleShowStatus}>{status}</button>
        {this.state.detail ? <TodoDetailViewContainer todo={this.props.todo} /> : ""}
      </li>
    )
  }
}

export default TodoListItem;