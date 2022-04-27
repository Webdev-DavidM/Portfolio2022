import styled from 'styled-components';

export const container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.color.darkNavy};
`;

export const fade = styled.h2`
  transition: opacity 1s ease-in-out;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
`;
