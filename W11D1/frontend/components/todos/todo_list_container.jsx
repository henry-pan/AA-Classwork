import { connect } from "react-redux";
import TodoList from "./todo_list";
import { allTodos } from "../../reducers/selectors";
import { receiveTodo, removeTodo, fetchAllTodos, createTodo } from "../../actions/todo_actions";


const mapStateToProps = state => ({
  todos: allTodos(state),
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  fetchAllTodos: todos => dispatch(fetchAllTodos(todos)),
  createTodo: todo => dispatch(createTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);