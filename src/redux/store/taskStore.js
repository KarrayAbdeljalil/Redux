import { createStore } from "redux";
import taskReducer from "../reducer/taskReducer";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const taskStore = createStore(taskReducer, devtools);

export default taskStore;