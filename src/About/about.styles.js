import styled, { keyframes } from 'styled-components';
import { color, fonts } from '../Global/Variables';
import { device } from '../Global/Breakpoints';
import { flexContainer, section, paragraph } from '../Global/Mixins';

export const sectionContainer = styled.div`
  ${flexContainer}
`;

export const about = styled.div`
  ${section({ width: '1200px' })}
  display: flex;
  flex-wrap: wrap;
  color: ${color.slate};
`;

const move = (start, end) => keyframes`
0%  { 
  opacity: 0;
  transform:translateX(${start});
}

100% {
  opacity: 1;
  transform:translateX(${end});
}
  `;

export const description = styled.p`
  ${paragraph};
  margin: 2rem 0 0 0;
  animation: ${move('-200px', '0')} 2s forwards;
  animation-delay: 1s;
  opacity: 0;

  @media ${device.tablet} {
    width: 70%;
  }
`;
export const ul = styled.ul`
  @media ${device.tablet} {
    animation: ${move('200px', '0')} 1.4s forwards;
    animation-delay: 1s;
    width: 30%;
    padding: 0 2rem;
  }
`;
export const li = styled.li`
  ${fonts.mono};
  font-size: 14px;
  position: relative;
  padding: 0 1.5rem 0.5rem 1.5rem;

  &::before {
    content: '▹';
    position: absolute;
    top: -5px;
    left: 0;
    font-size: 20px;
    color: ${color.green};
  }
`;

export const fade = styled.div`
  transition: all 1.4s ease-in;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
`;
