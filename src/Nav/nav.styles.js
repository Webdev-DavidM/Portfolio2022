import styled, { keyframes } from 'styled-components';
import { color } from '../Global/Variables';
import { device } from '../Global/Breakpoints';
import { button, inner } from '../Global/Mixins';

export const navContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: ${color.darkNavy};
  align-items: center;
  position: fixed;
  z-index: 2000;
  padding: 2rem;
  transition: top 0.6s ease-in-out;
  top: ${({ scrollDirection, scrolledToTop }) =>
    scrollDirection === 'down' && !scrolledToTop ? '-80px' : '0'};
  left: 0;
  width: 100%;
`;

export const ul = styled.ul`
  display: none;

  @media ${device.tablet} {
    display: flex;
    margin-left: auto;
  }
`;

export const icon = styled.div`
  background-color: ${color.green};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
`;

const dropDown = keyframes`
  0%  { 
    opacity: 0;
    transform:translateY(-50px);
  }

  100% {
    opacity: 1;
    transform:translateY(0px);
  }
  `;
export const li = styled.li`
  animation: ${dropDown} 1s forwards;
  color: ${color.green};
  padding: 1rem;
  font-size: 14px;
  opacity: 0;
  animation-delay: ${({ delay }) => `${delay}s`};

  &:hover {
    cursor: pointer;
  }
`;

export const hamburgerContainer = styled.div`
  display: block;

  @media ${device.tablet} {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const resume = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    ${button}
  }
`;

export const link = styled.a``;

export const mobileSideNavBar = styled.div`
  position: absolute;
  width: 80%;
  height: 100vh;
  top: 0;
  padding: 1rem;
  z-index: 3000;
  background-color: ${color.lightNavy};
  transition: right 0.8s ease-in-out;
  right: ${({ sideMenu }) => (sideMenu ? '0' : '-80%')};
`;
