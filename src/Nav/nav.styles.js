import styled, { keyframes } from 'styled-components';
import { color, fonts } from '../Global/Variables';
import { device } from '../Global/Breakpoints';
import { button } from '../Global/Mixins';

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

const fadeUp = keyframes`
  0%  { 
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const icon = styled.div`
  animation: ${fadeUp} 1s forwards;
  background-color: ${color.green};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  overflow: hidden;

  @media ${device.tablet} {
    height: 40px;
    width: 40px;
  }
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
  color: ${color.lightestSlate};
  padding: 1rem;
  font-size: 14px;
  opacity: 0;
  animation-delay: ${({ delay }) => `${delay}s`};
  ${fonts.mono}
  transition:  color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${color.green};
  }
`;

export const span = styled.span`
  color: ${color.green};
  font-size: 13px;
  padding-right: 0.3rem;
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
  animation: ${fadeUp} 1s forwards;
  ${fonts.mono}
  ${button({ padding: '.7rem' })}

  @media ${device.tablet} {
    display: block;
  }
`;

export const link = styled.a``;

export const blurredBackground = styled.div`
  position: fixed;
  transition: all 0.2s ease-in-out;
  height: ${({ sideMenu }) => (sideMenu ? '100vh' : '0')};
  backdrop-filter: blur(8px);
  top: 0;
  left: 0;
  width: ${({ sideMenu }) => (sideMenu ? '100%' : '0')};
  z-index: 2000;
`;

export const mobileSideNavBar = styled.div`
  position: absolute;
  width: 75%;
  height: 100vh;
  top: 0;
  padding: 1rem;
  z-index: 3000;
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: ${color.lightNavy};
  transition: right 0.8s ease-in-out;
  right: ${({ sideMenu }) => (sideMenu ? '0' : '-80%')};
`;

export const ulSideMenu = styled.ul``;

export const resumeSideMenu = styled.div`
  animation: ${fadeUp} 1s forwards;
  ${fonts.mono};
  margin: 2rem 5rem;
  ${button({ padding: '.7rem' })}
`;

export const liSideMenu = styled.li`
  color: ${color.lightestSlate};
  padding: 1rem;
  font-size: 18px;
  ${fonts.mono}
  transition:  color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${color.green};
  }
`;

export const spanSideMenu = styled.span`
  display: block;
  color: ${color.green};
  margin: 1rem 0 0.5rem 0;
  font-size: 14px;
`;
