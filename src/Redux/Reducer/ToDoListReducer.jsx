import { ToDoListDarkTheme } from "../../JSS_StyledComponent/Components/Theme/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../JSS_StyledComponent/Components/Theme/ToDoListLightThem";
import { ToDoListPrimaryTheme } from "../../JSS_StyledComponent/Components/Theme/ToDoListPrimaryTheme";
import { arrTheme } from "../../JSS_StyledComponent/Components/Theme/ThemeManagement";

import {
  ADD_NEW,
  CHANGE_THEME,
  DELETE_TASK,
  SET_DONE,
  UPDATE_TASK,
} from "../type/ChangeTheme";

const statedefault = {
  themeToDoList: ToDoListDarkTheme,
  taskList: [
    { id: 1, taskName: "task 1", done: false },
    { id: 2, taskName: "task 2", done: true },
    { id: 3, taskName: "task 3", done: false },
    { id: 4, taskName: "task 4", done: true },
  ],
  taskUpdate: { id: 1, taskName: "task 1", done: false },
  // disa
  //
};

const ToDoListReducer = (state = statedefault, action) => {
  switch (action.type) {
    case CHANGE_THEME: {
      console.log(action.value);
      let theme = arrTheme.find((theme) => theme.id == action.value);
      // console.log(theme);

      if (theme) {
        state.themeToDoList = { ...theme.theme };
      }
      return {
        ...state,
      };
    }
    case ADD_NEW: {
      // console.log(action.taskName, state.taskList.length);
      let capNhatTask = [...state.taskList];

      let index = state.taskList.some(
        (item) => item.taskName == action.taskName
      );
      console.log(index);
      if (index == false) {
        let newTask = {
          id: state.taskList.length + 1,
          taskName: action.taskName,
          done: false,
        };
        capNhatTask.push(newTask);
      } else {
        alert("Task nay da co trong list");
      }
      state.taskList = capNhatTask;
      // console.log(state.taskList);
      return { ...state };
    }

    case DELETE_TASK: {
      let capNhatTask = [...state.taskList];
      let index = state.taskList.findIndex((Item) => Item.id === action.id);
      // console.log(index);
      if (index != -1) {
        capNhatTask.splice(index, 1);
      }
      state.taskList = capNhatTask;
      return { ...state };
      break;
    }
    case SET_DONE: {
      let capNhatTask = [...state.taskList];
      let index = state.taskList.findIndex((Item) => Item.id === action.id);
      // console.log(index);
      if (index !== -1) {
        capNhatTask[index].done = true;
      }
      state.taskList = capNhatTask;
      return { ...state };
    }
    case "EDIT": {
      // state.taskUpdate = action.Task;
      // console.log(action.Task);
      return { ...state, taskUpdate: action.Task };
    }

    case UPDATE_TASK: {
      // console.log(action.Task);
      state.taskUpdate = {
        ...state.taskUpdate,
        taskName: action.Task,
      };
      let taskListUpdate = [...state.taskList];
      // console.log(state.taskUpdate);
      let index = taskListUpdate.findIndex(
        (task) => task.id == state.taskUpdate.id
      );
      // console.log(index);

      if (index !== -1) {
        taskListUpdate[index] = state.taskUpdate;
      }
      state.taskList = taskListUpdate;
      return { ...state };
    }

    default:
      return { ...state };
      break;
  }
};

export default ToDoListReducer;
