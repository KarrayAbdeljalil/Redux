import {
    ADD_TASK,
    COMPLETE_TASK,
    DELETE_TASK,
    EDIT_TASK,
  } from "../actionTypes";
  
  const initialState = [{ id: Math.random(), task: "wake up", isDone: false }];
  const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADD_TASK:
        return [...state, payload];
      case DELETE_TASK:
        return state.filter((el) => el.id !== payload);
      case COMPLETE_TASK:
        return state.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        );
      case EDIT_TASK:
        return state.map((el) => (el.id === payload.id ? payload : el));
      default:
        return state;
    }
  };
  
export default taskReducer;