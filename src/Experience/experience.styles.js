import styled, { keyframes } from 'styled-components';
import { color, fonts } from '../Global/Variables';
import { device } from '../Global/Breakpoints';
import { flexContainer, section } from '../Global/Mixins';

export const sectionContainer = styled.div`
  ${flexContainer}
`;

export const experience = styled.div`
  ${section({ width: '1100px' })}
`;

export const fade = styled.div`
  transition: all 2s ease-in-out;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  animation-delay: 1s;
`;

