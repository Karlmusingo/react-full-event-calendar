import styled from "styled-components";

const primaryColor = "#3359db";

export const Button = styled.button`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  padding: 0 !important;
  margin-right: 9px;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  outline: none;
  font-family: Verdana, sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #838d93;
  border: 1px solid #f0f1f1;
  cursor: pointer;
  line-height: 15px;

  &:focus {
    outline: none;
  }
  &.active {
    color: #f1802c;
    border: 1px solid #f1802c;
  }
`;

export const NavArrow = styled.li`
  color: ${primaryColor} !important;
  cursor: pointer;
  list-style-type: none;
  &:hover {
    font-size: 1.07rem !important;
  }
`;

export const Li = styled.li`
  list-style-type: none;
`;

export default Button;
