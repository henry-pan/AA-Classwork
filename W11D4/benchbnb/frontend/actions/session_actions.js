import { signup, login, logout } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const loginUser = user => dispatch => login(user)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(errors => dispatch(receiveErrors(errors)));

export const logoutUser = () => dispatch => logout()
  .then(() => dispatch(logoutCurrentUser()))
  .fail(errors => dispatch(receiveErrors(errors)));

export const signupUser = user => dispatch => signup(user)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(errors => dispatch(receiveErrors(errors)));
