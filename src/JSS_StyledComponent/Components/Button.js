import styled from "styled-components";

export const Title = styled.h1`
font-size: 1.5em
text-align: center;
color:#BF4F74;
background-color:${(props) => (props.primary ? "#ffffff" : "blue")};
`;
// Apdapting based on Props

export const Wrapper = styled.section`
  padding: 4em;
  background-color: papayawhip;
`;
//
export const Buttontest = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

// extend component tức là kế thừa

export const ButtonKeThua = styled(Buttontest)`
  color: #bf1423;
  border-color: tomato;
`;

//
