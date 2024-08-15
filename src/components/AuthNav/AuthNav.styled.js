import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  margin-left: 15px;
  font-weight: 700;
  color: #2a363b;
  font-size: 20px;
  &.active {
    color: #ffffff;
    /* text-decoration: underline; */
  }
`;
