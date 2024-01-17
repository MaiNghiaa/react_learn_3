import styled from "styled-components";

export const Textfield = styled.input`
  color: ${(props) => props.inputColor || "red"};
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.$inputColor || "#BF4F74"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

//attrs tạo ra một thuộc tính trực tiếp vào trong thẻ

// export const thunghiem = styled.input.attrs<{ size ? : string }>((props) => ({
// 	type: 'text',
// 	$size: props.$size || '1em',
// }))`
// 	border: 2px solid #bf4f74;
// 	margin: ${(props) => props.$size};
// 	padding: ${(props) => props.$size};
// `;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;
