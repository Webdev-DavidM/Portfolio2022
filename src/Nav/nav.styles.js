import styled from 'styled-components';
import { color } from '../Global/Variables';
import { device } from '../Global/Breakpoints';

export const navContainer = styled.div`
  height: 80px;
  display: flex;
  position: relative;
  background-color: ${color.blue};
  align-items: center;
`;

export const ul = styled.ul`
  display: flex;
`;

export const desktopNavBar = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const mobileSideNavBar = styled.div`
  position: absolute;
  width: 80%;
  height: 100vh;
  top: 0;
  z-index: 500;
  background-color: ${color.blue};
  transition: right 0.3s ease-in-out;
  right: ${({ sideMenu }) => (sideMenu ? '0' : '-80%')};
`;
