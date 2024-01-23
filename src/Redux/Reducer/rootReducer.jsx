import { combineReducers } from "redux";
import ToDoListReducer from "./ToDoListReducer";
const rootReducer = combineReducers({
  //store tong cua ung dung*
  ToDoList: ToDoListReducer,
});
export default rootReducer;
