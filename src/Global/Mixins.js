import { css } from 'styled-components';
import { color } from './Variables';
import { device } from './Breakpoints';

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
  font-size: 14px;
  background-color: none;
  border: 1px solid ${color.green};
  color: ${color.green};
`;

export const flexContainer = (verticalPosition = null) => css`
  display: flex;
  justify-content: center;
  height: 70vh;
  ${verticalPosition};
`;

export const section = () => css`
  max-width: 1400px;
  min-height: 500px;
  margin-top: 80px;
  padding: 2rem;

  @media ${device.tablet} {
    padding: 8rem;
    width: 1200px;
  }
`;
