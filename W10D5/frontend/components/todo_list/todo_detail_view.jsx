import React from 'react';
import TodoForm from '../todo_list/todo_form';
import TodoListItem from '../todo_list/todo_list_item';

const TodoDetailView = (props) => {


    const stepTitle = props.steps.map((step, i) => {
        return (<li>{step.title}</li>)
    });


    return (
        <div>
            <p>{props.todo.body}</p>
            <ul>{stepTitle}</ul>
        </div>
    )
}

export default TodoDetailView;