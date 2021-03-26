import React from 'react';
import TodoDetailView from './todo_detail_view';
import TodoDetailViewContainer from './todo_detail_view_container';


const TodoListItem = (props) => {
    let status = props.todo.done ? "Undo" : "Done";

    return (
        <li><h1>{props.todo.title}</h1>
            <button onClick={() => {
                props.todo.done = !props.todo.done;
                // let updatedTodo = props.todo;
                // updatedTodo.done = !updatedTodo.done;
                props.receiveTodo(props.todo)}}>{status}</button>
                <TodoDetailViewContainer />
                </li>
        // <li>{props.todo.title} - {props.todo.body} 
        // <button onClick={ () => props.removeTodo(props.todo)}>Delete Todo</button>
        // <button onClick={ () => {
        //     props.todo.done = !props.todo.done;
        //     // let updatedTodo = props.todo;
        //     // updatedTodo.done = !updatedTodo.done;
        //     props.receiveTodo(props.todo)}}>{status}</button></li>
    )
}

export default TodoListItem;