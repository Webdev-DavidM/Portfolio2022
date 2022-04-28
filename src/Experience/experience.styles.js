import styled from 'styled-components';
import { color } from '../Global/Variables';

export const container = styled.div`
  height: 100vh;
  background-color: ${color.darkNavy};
`;

export const fade = styled.h2`
  transition: opacity 1s ease-in-out;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
`;
