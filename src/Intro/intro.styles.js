import styled, { keyframes } from 'styled-components';
import { color, fonts } from '../Global/Variables';
import { device } from '../Global/Breakpoints';
import { flexContainer, paragraph, section } from '../Global/Mixins';

export const sectionContainer = styled.div`
  //Not i have to pass in css in js format
  ${flexContainer({ alignItems: 'center' })}
`;

export const intro = styled.div`
  ${section({ width: '1200px' })}
  margin-top: 30vh;
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
  animation-delay: 0.1s;
`;

export const name = styled.h2`
  font-size: 40px;
  animation: ${fadeUp} 1s forwards;
  color: ${color.lightSlate};
  opacity: 0;
  animation-delay: 0.2s;

  @media ${device.tablet} {
    font-size: 60px;
  }
`;

export const job = styled.h2`
  font-size: 40px;
  animation: ${fadeUp} 1s forwards;
  color: ${color.slate};
  opacity: 0;
  animation-delay: 0.3s;

  @media ${device.tablet} {
    font-size: 60px;
  }
`;

export const description = styled.p`
  color: ${color.slate};
  animation: ${fadeUp} 1s forwards;
  opacity: 0;
  animation-delay: 0.4s;
`;
