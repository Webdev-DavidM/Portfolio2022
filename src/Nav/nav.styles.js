import styled, { keyframes } from 'styled-components';
import { color } from '../Global/Variables';
import { device } from '../Global/Breakpoints';

export const navContainer = styled.div`
  ${({ scrollDirection, scrolledToTop }) =>
    console.log(scrollDirection, scrolledToTop)}
  height: 80px;
  display: flex;
  position: relative;
  background-color: ${color.blue};
  align-items: center;
  position: fixed;
  transition: top 0.6s ease-in-out;
  top: ${({ scrollDirection, scrolledToTop }) =>
    scrollDirection === 'down' && !scrolledToTop ? '-80px' : '0'};
  left: 0;
  width: 100%;
`;

export const desktopNavBar = styled.div`
  display: none;

  .links {
    display: flex;
  }

  .button {
    background-color: red;
  }

  @media ${device.tablet} {
    display: flex;
  }
`;

const roll = keyframes`
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const mobileSideNavBar = styled.div`
  position: absolute;
  width: 80%;
  height: 100vh;
  top: 0;
  z-index: 500;
  background-color: ${color.blue};
  transition: right 0.8s ease-in-out;
  right: ${({ sideMenu }) => (sideMenu ? '0' : '-80%')};
  /* 
  .forwards {
    animation: ${roll} 0.8s reverse;
    width: 30px;
    height: 30px;
  }

  .backwards {
    animation: roll 0.8s forwards;
    width: 30px;
    height: 30px;
  }

  @keyframes roll {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  } */
`;
