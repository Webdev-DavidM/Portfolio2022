import styled from 'styled-components';
import { color, fonts } from '../Global/Variables';
import { device } from '../Global/Breakpoints';

export const flexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const intro = styled.div`
  max-width: 1000px;
  min-height: 500px;
  margin-top: 80px;
  padding: 2rem;

  @media ${device.tablet} {
    padding: 8rem;
  }
`;

export const green = styled.p`
  color: ${color.green};
  ${fonts.mono};
`;

export const name = styled.h2`
  font-size: 40px;
  color: ${color.lightSlate};

  @media ${device.tablet} {
    font-size: 60px;
  }
`;

export const job = styled.h2`
  font-size: 40px;
  color: ${color.slate};

  @media ${device.tablet} {
    font-size: 60px;
  }
`;

export const description = styled.p`
  color: ${color.slate};
`;
