import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { allTodos, stepsByTodoId } from "./reducers/selectors";
import { receiveTodos, receiveTodo, removeTodo } from "./actions/todo_actions";
import { receiveSteps, receiveStep, removeStep } from "./actions/step_actions";
import { fetchTodos } from "./utils/todo_api_util";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;
  window.receiveSteps = receiveSteps;
  window.receiveStep = receiveStep;
  window.removeStep = removeStep;
  window.allTodos = allTodos;
  window.stepsByTodoId = stepsByTodoId;
  window.fetchTodos = fetchTodos;

  const content = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>,content);
});
