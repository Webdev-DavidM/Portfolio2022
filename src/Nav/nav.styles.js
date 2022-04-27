import styled from 'styled-components';

export const navContainer = styled.div`
  height: 100px;
  display: flex;
  position: relative;
  background-color: ${({ theme }) => console.log(theme)};
`;

export const ul = styled.ul`
  display: flex;
`;

export const desktopNavBar = styled.div`
  display: none;

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`;

export const mobileSideNavBar = styled.div``;
