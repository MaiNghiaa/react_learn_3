import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  width: 120px;
  height: 35px;
  padding: 10px 14px;
  color: ${(props) => props.theme.color};
  border: ${(props) => props.theme.borderButton};
  border-radius: ${(props) => props.theme.borderRadiusButton};
  &:hover {
    color: ${(props) => props.theme.hoverTextColor};
    background: ${(props) => props.theme.hoverBgColor};
  }
`;

export const ButtonIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  padding: 5px 5px;
  color: ${(props) => props.theme.color};
  border: ${(props) => props.theme.borderButton};
  border-radius: ${(props) => props.theme.borderRadiusButton};
  &:hover {
    color: ${(props) => props.theme.hoverTextColor};
    background: ${(props) => props.theme.hoverBgColor};
  }
`;

export const Task = styled.div`
  width: 560px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border: ${(props) => props.theme.borderButton};
`;
