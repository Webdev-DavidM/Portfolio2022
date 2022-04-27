import React from 'react';
import * as Styled from './contact.styles';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

export default function Contact() {
  return (
    <Element name="contact" className="element">
      <Styled.container>Contact</Styled.container>
    </Element>
  );
}
