import {
  ADD_NEW,
  CHANGE_THEME,
  DELETE_TASK,
  SET_DONE,
  UPDATE_TASK,
} from "../type/ChangeTheme";

export const ChangeThemeToDolist = (value) => {
  return {
    type: CHANGE_THEME,
    value,
  };
};

export const addNewTask = (taskName) => {
  return {
    type: ADD_NEW,
    taskName,
  };
};

export const deleteTask = (id) => {
  // console.log(id);
  return {
    type: DELETE_TASK,
    id,
  };
};

export const doneTask = (id) => {
  return {
    type: SET_DONE,
    id,
  };
};

export const updateTask = (Task) => ({
  type: UPDATE_TASK,
  Task,
});
