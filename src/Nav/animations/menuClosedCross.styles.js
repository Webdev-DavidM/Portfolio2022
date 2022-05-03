import styled, { keyframes } from 'styled-components';

const roll = keyframes`
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const menuCloseCross = styled.div`
  animation: ${roll} 1s forwards;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;
