import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';

const TodoList = (props) => {
  const todoTitle = props.todos.map( (todo, i) => {
    return <TodoListItem todo={todo} key={i}/>;
  });


  return (
    <div>
      <ul>{todoTitle}</ul>
    </div>
  )
}

export default TodoList;