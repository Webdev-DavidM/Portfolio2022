import { css } from 'styled-components';
import { color } from './Variables';

export const inner = (maxWidth = null) => css`
  align-items: center;
  display: flex;
  margin: 0 auto;
  ${maxWidth};
  width: 100%;
`;

export const button = () => css`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 12px;
  background-color: none;
  border: 1px solid ${color.green};
  color: ${color.green};
`;
