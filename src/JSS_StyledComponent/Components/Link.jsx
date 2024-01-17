import { Children } from "react";
import styled from "styled-components";
import React, { Component } from "react";

// export const Link = ({ props }) => {
//     return <a className={props.className}>{props.children}</a>;
//   };
//let {className,children} = props;

// Sinh ra để định nghĩa Css không phải custom Component Style
// Su dụng các thẻ Cơ sở ( Các thẻ cơ bản ) ( * thẻ <a></a> khong phai the co so nhe )
export const Link = ({ className, children, ...restProps }) => {
  return (
    <a
      className={className}
      //   href="https://styled-components.com/docs/basics#installation"
    >
      {children}
    </a>
  );
};

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

export const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> Khi được di chuột
  }

  & ~ & {
    background-color: tomato; // <Thing> Là một anh chị em của <Thing>, nhưng có thể không phải là ngay bên cạnh
  }

  & + & {
    background-color: lime; // <Thing> Nằm kế bên <Thing>
  }

  .something {
    background-color: lime; // <Thing> Được đánh dấu bằng một lớp CSS bổ sung ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> Bên trong một phần tử khác có nhãn ".something-else"
  }
`;

/* 

&:hover { color: red; }: Khi phần tử đại diện bởi & được di chuột, màu chữ của nó thay đổi thành màu đỏ.

& ~ & { background-color: tomato; }: Áp dụng màu nền là màu cà chua cho các phần tử anh chị em cùng loại với phần tử đại diện bởi &, nhưng không nhất thiết phải là anh chị em liền kề.

& + & { background-color: lime; }: Áp dụng màu nền là màu lime cho phần tử anh chị em liền kề cùng loại với phần tử đại diện bởi &.

&.something { background-color: lime; }: Áp dụng màu nền là màu lime cho phần tử đại diện bởi & khi nó có lớp "something".

.something-else & { border: 1px solid; }: Áp dụng đường viền 1px đậm cho phần tử đại diện bởi & khi nó là một phần tử con của một phần tử có nhãn "something-else".
*/
