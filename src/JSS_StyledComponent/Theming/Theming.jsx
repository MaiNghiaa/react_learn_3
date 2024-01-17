import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

const DarkTheme = {
  background: "#000000",
  color: "#ffffff",
};
const LightTheme = {
  background: "tomato",
  color: "#ffffff",
};

const Divtest = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
export default class Theming extends Component {
  changeTheme = (event) => {
    this.setState({
      theme: event.target.value == 1 ? DarkTheme : LightTheme,
    });
  };
  state = {
    theme: DarkTheme,
  };
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Divtest>123</Divtest>
        <select onChange={this.changeTheme}>
          <option value="1">Dark</option>
          <option value="2">Light</option>
        </select>
      </ThemeProvider>
    );
  }
}
