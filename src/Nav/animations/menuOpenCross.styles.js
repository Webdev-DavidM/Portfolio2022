import styled, { keyframes } from 'styled-components';

const roll = keyframes`
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const menuOpenCross = styled.div`
  animation: ${roll} 0.8s reverse;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;

  &:hover {
    cursor: pointer;
  }

  .close {
    background: red;
    svg path {
      fill: yellow;
    }
  }
`;
