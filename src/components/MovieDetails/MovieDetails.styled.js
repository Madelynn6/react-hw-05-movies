import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  background-color: #b9f3e4;
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    scale: 1.1;
  }
`;

export const ContainerMovie = styled.div`
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  border-bottom: 1px solid #1b1725;
  display: flex;
  gap: 10px;
`;

export const ContainerInfo = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  padding: 10px;
  border-bottom: 1px solid #1b1725;
`;

export const Genres = styled.span`
  background-color: #bef0cb;
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
`;

export const StyledLink = styled(Link)`
  background-color: #f6ba6f;
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    scale: 1.03;
  }
`;
