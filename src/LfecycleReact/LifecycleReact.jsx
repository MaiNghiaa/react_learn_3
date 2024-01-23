import React, { Component } from "react";
import ChildComponent from "../LfecycleReact/ChildComponent";
export default class LifecycleReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };

    console.log("constructor");
  }
  // Duoc goi khi component này được sử udngj trên giao diện
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  //duoc goi khi setState hoặc setProps
  shouldComponentUpdate() {
    //return true thi chay tiep các lifecycle còn lại, ngược lại return false thì dừng lại 0 chạy thêm các lifecycle
    return true;
  }

  render() {
    console.log("renderParent");
    return (
      <div>
        <h1>Parent component</h1>
        <span>Number: {this.state.number}</span>
        <button
          className="py-2 px-3"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        <ChildComponent />
      </div>
    );
  }
  //Duowjc goi sau render va chi goi 1 lan duy nhat ( trang thang mouting  )
  componentDidMount() {
    console.log("ComponentDidUppdate");
  }
  //Lan dau se khong goi, chi goi khi setstate hoac thay doi props
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
}
