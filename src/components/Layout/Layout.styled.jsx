import styled from "styled-components";

export const StyledHeader = styled.header`
width: 100%;
padding: 20px 0 20px 0;

a {
  padding: 5px 0 1px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 20px;

  &.active {
    color: black;
    border-bottom: 4px solid #4C5CED;
  }

   &:first-child{
  margin-left: 110px;
  margin-right: 15px;
  }

  &:hover{
    color: #4C5CED;
  }
}
`;