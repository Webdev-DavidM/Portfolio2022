import { css } from 'styled-components';
import { color, fonts, fontWeights } from '../Variables';

export const TopLevel = css`
  ${console.log(color.black)}
  html {
    height: 100%;
  }

  /**
   *  1. When the footer 'quick links' button is clicked,
   *     the footer is positioned fixed. Padding here prevents
   *     the content from shunting downwards to fill the space
   *     previosuly occupied by the footer when it was in document flow
   *  2. Ensure min-height when viewport is:
   *     - above 670px
   *     - landscape orientation and < 670px
   */
  body {
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: ${color.lightSlate};
    height: 100%;
    justify-content: space-between;
    line-height: 1.4;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fbf5ee;
  }

  body.is-active {
    overflow: hidden;
  }

  #gatsby-focus-wrapper {
    position: relative;
  }

  * {
    outline: none;
  }
`;
