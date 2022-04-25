import { css } from 'styled-components';

export const inner = (maxWidth = null) => css`
  align-items: center;
  display: flex;
  margin: 0 auto;
  ${maxWidth};
  width: 100%;
`;
