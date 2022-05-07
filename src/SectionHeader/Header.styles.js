import styled from 'styled-components';
import { color, fonts } from '../Global/Variables';
import { device } from '../Global/Breakpoints';

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const number = styled.div`
  color: ${color.green};
  padding-right: 0.5rem;
  ${fonts.mono}
  font-size:18px;
`;

export const title = styled.span`
  color: ${color.lightestSlate};
  font-size: 20px;
  font-family: ${fonts.main};
  font-weight: 700;

  @media ${device.tablet} {
    font-size: 28px;
  }
`;

export const line = styled.span`
  height: 2px;
  width: 100px;
  margin-left: 1rem;
  border-top: 1px ${color.slate} solid;

  @media ${device.tablet} {
    width: 250px;
  }
`;
