import styled, { keyframes } from 'styled-components';
import { color, fonts } from '../Global/Variables';
import { device } from '../Global/Breakpoints';
import { flexContainer, section, button, paragraph } from '../Global/Mixins';

export const sectionContainer = styled.div`
  ${flexContainer({ height: '100vh' })};
`;

export const contact = styled.div`
  ${section({ width: '1000px' })};
  text-align: center;
  margin-top: 20vh;
`;

export const number = styled.span`
  ${fonts.mono};
  color: ${color.green};
  margin-right: 0.5rem;
  font-size: 18px;
`;

export const subtitle = styled.span`
  ${fonts.mono};
  font-size: 19px;
  color: ${color.slate};
  letter-spacing: -1px;
`;

export const title = styled.h3`
  margin-top: 1rem;
  color: ${color.lightSlate};
  font-size: 28px;
`;

export const text = styled.p`
  ${paragraph}
`;

export const contactButton = styled.button`
  ${button({ padding: '1.2rem' })}
`;

export const fade = styled.div`
  transition: opacity 1.5s ease-in-out;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  animation-delay: 2s;
`;
