import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #19a7ce;
  gap: 12px;
  padding: 10px 10px;
  margin-bottom: 16px;
  border-bottom: 1px solid #1b1725;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    background-color: #146c94;
    color: white;
  }
  &:hover {
    cursor: pointer;
    scale: 1.1;
    color: #19a7ce;
    background-color: #f6f1f1;
  }
`;
