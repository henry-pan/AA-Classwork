const lsTodos = JSON.parse(localStorage.getItem('todos')) || [];
const todoClass = document.querySelector('.todos');

function addTodo (e) {
  e.preventDefault();
  const input = document.querySelector('input[name="add-todo"]');
  const value = input.value;
  const todos = { value, done: false };
  lsTodos.push(todos);
  localStorage.setItem("todos", JSON.stringify(lsTodos));

  populateList();
}

function populateList () {
  todoClass.innerHTML = lsTodos.map((item) => {
    return `<li>${item.value}</li>`;
  }).join(" ");
}

const submitButton = document.querySelector('.add-todo-form');
submitButton.addEventListener("submit", addTodo);
populateList();
