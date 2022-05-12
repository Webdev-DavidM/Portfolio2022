import styled from 'styled-components';
import { color } from '../Global/Variables';

export const Link = styled.a`
  margin: 0 1rem;
`;

export const Icon = styled.svg`
  stroke: ${color.slate};
  pointer-events: stroke;
  transition: 0.3s color ease-in-out;

  &:hover {
    stroke: ${color.green};
  }
`;
