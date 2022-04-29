import styled, { keyframes } from 'styled-components';
import { color } from '../Global/Variables';

export const splashPage = styled.div`
  position: relative;
  z-index: 2000;
  height: 100vh;
  width: 100%;
  background-color: ${color.darkNavy};
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const animate = (props) => keyframes`
   0%    { opacity: 0; transform: translateX(-200px); transform:scale(0); }

50%  { opacity: 1; transform: translateX(0px); transform:scale(${
  props.scale + 0.2
}); }

100% {opacity: 0; transform: translateX(0px);transform:scale(${props.scale});}
`;

export const tech = styled.h1`
  animation: ${animate} 2s forwards;
  position: absolute;
  font-size: 60px;
  top: calc(50% -140px);
  left: calc(50% -42px);
  animation-delay: ${({ delay }) => `${delay}s`};
  opacity: 0;
`;

const flash = keyframes`
  0%    { opacity: 0;}

30%  { opacity: 1; }



100% {opacity: 0;}
`;

export const cameraFlash = styled.div`
  position: fixed;
  z-index: 3000;
  animation: ${flash} 1.8s forwards;
  background-color: white;
  width: 100vw;
  height: 100vh;
  animation-delay: 10.5s;
  opacity: 0;
`;

const nameAndRole = keyframes`
  0%    { opacity: 0;}

80% {
  opacity:1;
}

100% {opacity: 0;}
`;

export const name = styled.h1`
  animation: ${nameAndRole} 2.2s forwards;
  position: absolute;
  font-size: 100px;
  top: calc(51% -140px);
  left: calc(50% -42px);
  animation-delay: 14.8s;
  opacity: 0;
`;

export const role = styled.h1`
  animation: ${nameAndRole} 2.2s forwards;
  position: absolute;
  font-size: 100px;
  top: calc(49% -140px);
  left: calc(50% -42px);
  animation-delay: 12.5s;
  opacity: 0;
`;
