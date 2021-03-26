import React from 'react';
import StepListContainer from "../step_list/step_list_container";

const TodoDetailView = (props) => {
  return (
    <div>
      <p>{props.todo.body}</p>

      <ul><StepListContainer todo_id={props.todo.id}/></ul>
      <button onClick={ () => props.removeTodo(props.todo)}>Delete Todo</button>
    </div>
  )
}

export default TodoDetailView;