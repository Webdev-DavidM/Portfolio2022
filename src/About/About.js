import React from 'react';
import * as Styled from './about.styles';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

export default function About() {
  return (
    <Element name="about" className="element">
      <Styled.container>About</Styled.container>
    </Element>
  );
}
