import React from 'react';


const TodoListItem = (props) => {
    let status = props.todo.done ? "Undo" : "Done";

    return (
        <li>{props.todo.title} - {props.todo.body} 
        <button onClick={ () => props.removeTodo(props.todo)}>Delete Todo</button>
        <button onClick={ () => {
            props.todo.done = !props.todo.done;
            // let updatedTodo = props.todo;
            // updatedTodo.done = !updatedTodo.done;
            props.receiveTodo(props.todo)}}>{status}</button></li>
    )
}

export default TodoListItem;