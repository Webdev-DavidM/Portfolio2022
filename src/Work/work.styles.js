import styled, { keyframes } from 'styled-components';
import { color, fonts } from '../Global/Variables';
import { device } from '../Global/Breakpoints';
import { flexContainer, section } from '../Global/Mixins';

export const sectionContainer = styled.div`
  ${flexContainer}
`;

export const work = styled.div`
  ${section({ width: '1200px' })}
`;

export const fade = styled.h2`
  transition: opacity 1s ease-in-out;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
`;
