import styled, { keyframes } from 'styled-components';
import { color, fonts } from '../Global/Variables';
import { device } from '../Global/Breakpoints';
import { flexContainer, section, button, paragraph } from '../Global/Mixins';

export const sectionContainer = styled.div`
  ${flexContainer};
`;

export const contact = styled.div`
  ${section({ width: '1000px' })};
  text-align: center;
`;

export const number = styled.span`
  ${fonts.mono};
  color: ${color.green};
  margin-right: 0.5rem;
`;

export const subtitle = styled.span`
  ${fonts.mono};
  font-size: 24px;
  color: ${color.slate};
`;

export const title = styled.h2`
  margin-top: 1rem;
  color: ${color.lightSlate};
`;

export const text = styled.p`
  ${paragraph}
`;

export const contactButton = styled.button`
  ${button({ padding: '1.2rem' })}
`;

export const fade = styled.h2`
  transition: opacity 1s ease-in-out;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
`;
