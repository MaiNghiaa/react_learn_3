import React, { Component } from "react";
import { ToDoListApp, Wrapper } from "../../Components/Wrapper";
import { ThemeProvider } from "styled-components";
import { ToDoListDarkTheme } from "../../Components/Theme/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../Components/Theme/ToDoListLightThem";
import { ToDoListPrimaryTheme } from "../../Components/Theme/ToDoListPrimaryTheme";
import { H2, H3, Span } from "../../ComponentToDoList/Text";
import { Button, ButtonIcon } from "../../ComponentToDoList/Button";
import { H1 } from "../../ComponentToDoList/Text";
import { Task } from "../../ComponentToDoList/Button";
import { connect } from "react-redux";
import {
  ChangeThemeToDolist,
  addNewTask,
  deleteTask,
  doneTask,
  updateTask,
} from "../../../Redux/action/ChangeThemeToDolist";
import { arrTheme } from "../../Components/Theme/ThemeManagement";

class TodoList extends Component {
  state = {
    // id: 0,
    taskName: "",
    disabled: true,
  };
  //life cycle 16.0 nhan vao props moi duoc thuc thi truoc render
  // componentWillReceiveProps(newProps) {
  //   console.log("this.props", this.props);
  //   console.log("newProps", newProps);
  //   this.setState({
  //     taskName: newProps.taskEdit.taskName,
  //   });
  // }
  //LifeCycle tĩnh không truy xuất được con trỏ this
  // static getDerivedStateFromProps(newProps, currentState) {
  //   //     //newProps: là props mới, props cũ là this.props (không truy xuất được)
  //   //     //currentState: ứng với state hiện tại this.state
  //   //tra ve state moi
  //   let newState = { ...currentState, taskName: newProps.taskEdit.taskName };
  //   return newState;
  //   // tra ve null thi state giu nguyen
  //   //return null;
  // }

  taskToDo = () => {
    let TaskFalse = this.props.taskList.filter((item) => {
      return item.done == false;
    });
    return TaskFalse.map((item, index) => {
      return (
        <Task key={index}>
          <H3>{item.taskName}</H3>
          <div className="action flex gap-3">
            <ButtonIcon onClick={() => this.props.DeleteTask(item.id)}>
              {" "}
              x{" "}
            </ButtonIcon>
            <ButtonIcon
              onClick={() => {
                this.setState(
                  {
                    disabled: false,
                  },
                  () => {
                    this.props.EditTask(item);
                  }
                );
              }}
            >
              {" "}
              📝{" "}
            </ButtonIcon>
            <ButtonIcon onClick={() => this.props.DoneTask(item.id)}>
              {" "}
              ✅{" "}
            </ButtonIcon>
          </div>
        </Task>
      );
    });
  };

  taskComplete = () => {
    return this.props.taskList
      .filter((item) => item.done == true)
      .map((item, index) => {
        return (
          <Task key={index}>
            <H3>{item.taskName}</H3>
            <div className="action flex gap-3">
              <ButtonIcon onClick={() => this.props.DeleteTask(item.id)}>
                {" "}
                x{" "}
              </ButtonIcon>
              {/* <ButtonIcon> 📝 </ButtonIcon> */}
            </div>
          </Task>
        );
      });
  };
  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return <option value={theme.id}>{theme.name}</option>;
    });
  };
  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
        <ToDoListApp>
          <Wrapper>
            <div className="w-[540px]  mb-3 border border-[#000000]">
              <select
                className="w-[520px]"
                onChange={(e) => this.props.changeTheme(e.target.value)}
              >
                {this.renderTheme()}
              </select>
            </div>
            {/* {console.log(this.props.taskList.taskUpdate)} */}
            <H1> To Do list App</H1>
            <div className="flex flex-col ">
              <div className="flex flex-col justify-center items-start  w-[full]">
                <form
                  onSubmit={this.props.AddTask}
                  className="flex gap-4 items-center"
                >
                  <div className="flex gap-2 flex-col items-start justify-start">
                    <Span>Task Name</Span>
                    <input
                      type="text"
                      name="Add"
                      value={this.state.taskName}
                      placeholder="Task_name"
                      id="Add"
                      onChange={(e) => {
                        this.setState(
                          {
                            taskName: e.target.value,
                          },
                          () => {
                            console.log(this.state);
                          }
                        );
                      }}
                      className="w-[420px] py-[7px] px-[10px] h-[35px] border border-[#000000]"
                    />
                  </div>

                  <Button type="submit" value="submit">
                    Add task
                  </Button>
                </form>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              {this.state.disabled ? (
                <Button
                  type="submit"
                  disabled
                  value="submit"
                  onClick={() => {
                    this.props.UpdateTask(this.state.taskName);
                  }}
                >
                  Update task
                </Button>
              ) : (
                <Button
                  type="submit"
                  value="submit"
                  onClick={() => {
                    let { taskName } = this.state;
                    this.setState(
                      {
                        taskName: "",
                        disabled: false,
                      },
                      () => {
                        this.props.UpdateTask(taskName);
                      }
                    );
                  }}
                >
                  Update task
                </Button>
              )}

              <H2>Task To do</H2>
              {this.taskToDo()}
            </div>
            <div className="flex flex-col items-center justify-start">
              <H2>Task complete</H2>
              {this.taskComplete()}
            </div>
          </Wrapper>
        </ToDoListApp>
      </ThemeProvider>
    );
  }

  //day la lifecycle tra ve props cu va state cu cua component truoc khi render ( lifeCycle nay chay sau khi render)
  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
    //buoc so sanh neu nhu props truoc do ( khac taskEdit hien tai thi moi setState)
    if (prevProps.taskEdit.id !== this.props.taskEdit.id)
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
  }
}

const mapStateToProps = (State) => {
  return {
    themeToDoList: State.ToDoList.themeToDoList,
    taskList: State.ToDoList.taskList,
    taskEdit: State.ToDoList.taskUpdate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (e) => {
      // console.log(e);
      dispatch(ChangeThemeToDolist(e));
    },
    AddTask: (event) => {
      event.preventDefault();
      dispatch(addNewTask(event.target.elements.Add.value));
      // console.log(event.target.elements.Add.value);
    },
    DeleteTask: (id) => {
      dispatch(deleteTask(id));
    },

    DoneTask: (id) => {
      dispatch(doneTask(id));
    },
    EditTask: (Task) => {
      // console.log(Task);
      // this.setState({
      //   // this.state.taskName =
      // });
      dispatch({
        type: "EDIT",
        Task,
      });
    },
    UpdateTask: (Task) => {
      // console.log(Task);
      dispatch(updateTask(Task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
