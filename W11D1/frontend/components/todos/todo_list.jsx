import React from 'react';
import TodoForm from '../todo_list/todo_form';
import TodoListItem from '../todo_list/todo_list_item';

class TodoList extends React.Component {
// const TodoList = (props) => {
  constructor(props) {
    super(props);
  }


  componentDidMount () {
    this.props.fetchAllTodos();
  }

  render () {

    const todoTitle = this.props.todos.map( (todo, i) => {
    return <TodoListItem 
            todo={todo}
            key={i} 
            removeTodo={this.props.removeTodo} 
            receiveTodo={this.props.receiveTodo}/>;
    });

    return (
      <div>
        <ul className="todo-list">{todoTitle}</ul>
        <TodoForm 
          createTodo={this.props.createTodo} />
      </div>
    )
  }
}

export default TodoList;