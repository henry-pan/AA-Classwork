export const allTodos = (state) => {
  return Object.values(state.todos);
};

export const stepsByTodoId = (state, todoId) => {
  const steps = Object.values(state.steps);
  return steps.filter(el => el.todo_id === todoId);
};