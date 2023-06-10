import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 8px;

  &:hover {
    color: white;
    background-color: orangered;
  }
`;
