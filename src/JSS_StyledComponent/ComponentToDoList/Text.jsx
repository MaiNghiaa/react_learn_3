import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.color};
`;

export const H2 = styled.h2`
  margin-top: 12px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${(props) => props.theme.color};
`;

export const H3 = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.color};
`;

export const Span = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.color};
`;
