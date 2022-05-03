import styled from 'styled-components';
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
  color: ${color.green};
  height: 20px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const li = styled.li`
  color: ${color.green};
  padding: 1rem;
  font-size: 12px;

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
  z-index: 500;
  background-color: ${color.lightNavy};
  transition: right 0.8s ease-in-out;
  right: ${({ sideMenu }) => (sideMenu ? '0' : '-80%')};
`;
