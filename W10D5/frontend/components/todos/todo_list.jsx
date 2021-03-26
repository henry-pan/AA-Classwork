import React from 'react';
import TodoForm from '../todo_list/todo_form';
import TodoListItem from '../todo_list/todo_list_item';

const TodoList = (props) => {
  const todoTitle = props.todos.map( (todo, i) => {
    return <TodoListItem 
              todo={todo}
              key={i} 
              removeTodo={props.removeTodo} 
              receiveTodo={props.receiveTodo}/>;
  });


  return (
    <div>
      <ul>{todoTitle}</ul>
      <TodoForm 
        receiveTodo={props.receiveTodo} />
    </div>
  )
}

export default TodoList;