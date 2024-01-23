import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  background: ${(props) => props.theme.bgColor};
  witdh: 600px;
  border: 3px solid ${(props) => props.theme.borderColor};
  padding: 20px 14px;
`;

export const ToDoListApp = styled.div`
  width: 600px;

  margin: 75px auto;
`;
