import styled, { keyframes } from 'styled-components';
import { color, fonts } from '../Global/Variables';
import { device } from '../Global/Breakpoints';
import { flexContainer, paragraph, section } from '../Global/Mixins';

export const sectionContainer = styled.div`
  //Not i have to pass in css in js format
  ${flexContainer({ alignItems: 'center', height: '100vh' })}
`;

export const intro = styled.div`
  margin-top: 200px;

  @media ${device.tablet} {
    margin-top: 0;
  }

  ${section({ width: '1200px' })}
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
  font-size: 30px;
  animation: ${fadeUp} 1s forwards;
  color: ${color.lightestSlate};
  opacity: 0;
  animation-delay: 0.2s;

  @media ${device.tablet} {
    font-size: 45px;
  }

  @media ${device.desktop} {
    font-size: 60px;
  }
`;

export const job = styled.h2`
  font-size: 30px;
  animation: ${fadeUp} 1s forwards;
  color: ${color.lightSlate};
  opacity: 0;
  animation-delay: 0.3s;

  @media ${device.tablet} {
    font-size: 45px;
  }

  @media ${device.desktop} {
    font-size: 60px;
  }
`;

export const description = styled.p`
  color: ${color.slate};
  animation: ${fadeUp} 1s forwards;
  opacity: 0;
  animation-delay: 0.4s;
`;
