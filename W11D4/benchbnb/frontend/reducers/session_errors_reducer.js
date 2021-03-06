import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_ERRORS:
      return state.concat(action.errors);
    case RECEIVE_CURRENT_USER:
      return []; 
    default:
      return state;
  }
}

export default sessionErrorsReducer;
