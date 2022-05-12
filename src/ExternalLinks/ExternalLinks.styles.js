import styled from 'styled-components';

export const ExternalLinks = styled.div`
  margin: auto;
  display: flex;
  height: 100px;
  flex-direction: ${({ direction }) => console.log(direction)};
  justify-content: center;
  margin: 1rem;
`;
