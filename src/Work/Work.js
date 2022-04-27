import React from 'react';
import * as Styled from './work.styles';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

export default function Work() {
  return (
    <Element name="work" className="element">
      <Styled.container>Work</Styled.container>
    </Element>
  );
}
