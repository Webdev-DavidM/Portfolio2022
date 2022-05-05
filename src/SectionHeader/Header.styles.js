import styled from 'styled-components';
import { color } from '../Global/Variables';

export const Header = styled.div``;

export const number = styled.div`
  color: ${color.green};
  padding-right: 0.5rem;
  display: inline-block;
  width: 5%;
`;

export const title = styled.span`
  color: ${color.lightSlate};
  font-size: 40px;
  display: inline-block;
  width: 25%;
`;

export const line = styled.span`
  height: 10px;
  border-top: 1px ${color.slate} solid;
  display: inline-block;
  width: 70%;
`;
