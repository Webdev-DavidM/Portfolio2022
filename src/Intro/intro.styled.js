import styled, { keyframes } from 'styled-components';
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

const fadeUp = keyframes`
    0% {
      opacity:0;
      transform: translateX(50px);
    }
    100% {
       opacity:1;
       transform: translateX(0);
    }
`;

export const green = styled.p`
  animation: ${fadeUp} 1s forwards;
  color: ${color.green};
  ${fonts.mono};
  opacity: 0;
  animation-delay: 1.1s;
`;

export const name = styled.h2`
  font-size: 40px;
  animation: ${fadeUp} 1s forwards;
  color: ${color.lightSlate};
  opacity: 0;
  animation-delay: 1.2s;

  @media ${device.tablet} {
    font-size: 60px;
  }
`;

export const job = styled.h2`
  font-size: 40px;
  animation: ${fadeUp} 1s forwards;
  color: ${color.slate};
  opacity: 0;
  animation-delay: 1.3s;

  @media ${device.tablet} {
    font-size: 60px;
  }
`;

export const description = styled.p`
  animation: ${fadeUp} 1s forwards;
  color: ${color.slate};
  opacity: 0;
  animation-delay: 1.4s;
`;
