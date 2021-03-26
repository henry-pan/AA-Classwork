import React from 'react';
import StepListContainer from "../step_list/step_list_container";

const TodoDetailView = (props) => {
  return (
    <div className="todo-detail">
      <p>{props.todo.body}</p>

      <StepListContainer todo_id={props.todo.id}/>
      <button onClick={ () => props.removeTodo(props.todo)}>Delete Todo</button>
    </div>
  )
}

export default TodoDetailView;