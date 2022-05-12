import styled, { keyframes } from 'styled-components';
import { color, fonts } from '../Global/Variables';
import { device } from '../Global/Breakpoints';
import { flexContainer, section, paragraph, button } from '../Global/Mixins';

export const sectionContainer = styled.div`
  ${flexContainer}
`;

export const projectContainer = styled.ul`
  ${section({ width: '1200px' })}
`;

export const project = styled.li`
  padding: 3rem 0;
  position: relative;
  margin: 2rem 0;
  min-height: 400px;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const projectImageContainer = styled.div`
  position: relative;
  order: 1;

  @media ${device.tablet} {
    width: 60%;
  }
`;

export const imageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  background-color: ${color.greenTint};
  z-index: 200;
  transition: background-color 0.2s ease-in-out;

  @media ${device.tablet} {
    display: block;
  }

  &:hover {
    background-color: transparent;
    cursor: pointer;
  }
`;

export const image = styled.img``;

export const projectDetails = styled.div`
  background-color: ${color.navyShadow};
  position: absolute;
  padding: 1rem;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  @media ${device.tablet} {
    padding: 1rem 0;
    width: 45%;
    order: ${({ projectNumber }) => (projectNumber % 2 == 0 ? `1` : `0`)};
    text-align: ${({ projectNumber }) =>
      projectNumber % 2 == 0 ? `right` : `left`};

    position: relative;
    background-color: transparent;
  }
`;

export const subtitle = styled.p`
  ${fonts.mono};
  color: ${color.green};
  margin: 0.5rem 0;
  font-size: 14px;
`;

export const title = styled.h2`
  margin: 0;
`;

export const projectDescription = styled.p`
  ${paragraph}

  background-color: ${color.lightNavy};

  font-size: 16px;
  padding: 1rem;
  color: ${color.slate};

  @media ${device.tablet} {
    width: 450px;
    padding: 0.5rem;
    position: absolute;
    ${({ projectNumber }) => (projectNumber % 2 === 0 ? `right:0;` : `left:0;`)}
    top: 60px;
    z-index: 2000;
  }
`;

export const techDetails = styled.div`
  ${fonts.mono};
  min-height: 50px;

  @media ${device.tablet} {
    margin-top: 110px;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ projectNumber }) =>
      projectNumber % 2 === 0 ? `end;` : `start;`};
  }
`;

export const tech = styled.span`
  font-size: 14px;
  color: ${color.green};
  padding: 0.5rem;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  @media ${device.tablet} {
    padding: ${({ projectNumber }) =>
      projectNumber % 2 === 0 ? `0.5rem 0.5rem 0 0;` : `0.5rem 0 0 0.5rem;`};
  }
`;

export const githubLink = styled.a`
  ${button({ padding: '.5rem' })}
`;

export const fade = styled.div`
  transition: all 2s ease-in;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  animation-delay: 0.5s;
`;
