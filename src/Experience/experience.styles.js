import styled, { keyframes } from 'styled-components';
import { color, fonts } from '../Global/Variables';
import { device } from '../Global/Breakpoints';
import { flexContainer, section } from '../Global/Mixins';

export const sectionContainer = styled.div`
  ${flexContainer}
`;

export const experience = styled.div`
  ${section({ width: '1100px' })}
`;

export const workContainer = styled.div`
  margin-top: 3rem;
  height: auto;
  @media ${device.tablet} {
    display: flex;
  }
`;

export const ul = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 0 0;

  @media ${device.tablet} {
    flex-direction: column;
    flex-wrap: wrap;
    width: 20%;
    margin: 0;
    order: 1;
  }

  @media ${device.desktop} {
    width: 15%;
  }
`;

export const li = styled.li`
  display: inline-block;
  ${fonts.mono};
  font-size: 14px;
  color: ${({ active }) => (active ? `${color.green}` : `${color.lightSlate}`)};

  width: 100%;
  transition: all 0.3s ease-in-out;
  text-align: center;
  padding: 1rem 0;
  background-color: ${({ active }) =>
    active ? `${color.lightNavy}` : 'transparent'};

  &:hover {
    color: ${color.green};
    cursor: pointer;
    background-color: ${color.lightNavy};
  }

  @media ${device.tablet} {
    text-align: left;
    padding-left: 1rem;
  }
`;

export const workDetails = styled.div`
  min-height: 300px;
  font-size: 20px;
  padding: 1rem;

  @media ${device.tablet} {
    height: 100%;
    width: 80%;
    order: 2;
  }

  @media ${device.desktop} {
    width: calc(80% - 2px);
  }
`;

export const role = styled.span`
  font-weight: 500;
`;

export const company = styled.span`
  color: ${color.green};
`;

export const dates = styled.div`
  ${fonts.mono};
  color: ${color.lighterSlate};
  font-size: 15px;
  margin: 0.5rem 0;
`;

export const jobDetailsUl = styled.ul``;

export const jobDetailsLi = styled.li`
  padding: 0.5rem 0;
  color: ${color.slate};
  font-size: 16px;
`;

export const line = styled.div`
  height: 2px;
  background-color: ${color.slate};
  margin-bottom: 3rem;
  position: relative;
  transition: left 0.2s ease-out;

  @media ${device.tablet} {
    margin-bottom: 0;
    display: inline-block;
    height: 420px;
    width: 2px;
    order: 0;
  }

  &:after {
    content: '';
    position: absolute;
    width: 33%;
    height: 2px;
    background-color: ${color.green};
    top: 0;
    z-index: 1000;
    transition: all 0.2s ease;
    left: ${({ position }) => `${position}%`};

    @media ${device.tablet} {
      height: 33%;
      width: 2px;
      top: ${({ position }) => `${position}%`};
      margin-bottom: 0;
    }
  }
`;

export const fade = styled.div`
  transition: all 2s ease-in-out;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  animation-delay: 1s;
`;
