import styled from 'styled-components';
import { color, fonts } from '../Global/Variables';

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const number = styled.div`
  color: ${color.green};
  padding-right: 0.5rem;
  ${fonts.mono}
  font-size:18px;
`;

export const title = styled.span`
  color: ${color.lightSlate};
  font-size: 28px;
  font-family: ${fonts.main};
  font-weight: 700;
`;

export const line = styled.span`
  height: 2px;
  width: 250px;
  margin-left: 1rem;
  border-top: 1px ${color.slate} solid;
`;
