import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Input = styled.input`
  width: 200px;
  height: 25px;
  border: none;
  border-bottom: 2px solid #146c94;

  &:focus {
    outline: none;
  }
`;

export const Btn = styled.button`
  width: 75px;
  height: 29px;
  background-color: #146c94;
  border-radius: 5px;
  border: none;
  color: white;

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`;

export const List = styled.ul`
  margin-top:20px;
  display:flex;
  flex-direction:column;
  gap:10px;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  font-size: 18px;

  &:hover {
    color: #19a7ce;
  }
`;
