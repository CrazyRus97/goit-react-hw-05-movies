import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledContainer = styled.div`
width: 1280px;
  padding-right: 24px; 
  padding-left: 24px;
  margin: 0 auto;
  `;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 5px 0;
  color: black;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 5px;

  &:hover {
     text-decoration: underline; 
     color: #4C5CED;   
    }

`;

export const MainInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  .movie-info{
    max-width:900px;
  }
  .genres-list{
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
  }
`;

export const AdditionalInfo = styled.div`
display: flex;
  gap: 20px;
  list-style: none;
  padding-left: 10px;
  margin-bottom: 20px;
  a {
    color: #4C5CED;
    font-weight: 500;
    }
    :hover {
     color: #4C5CED;   
    }
`;