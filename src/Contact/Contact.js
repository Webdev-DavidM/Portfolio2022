import React, { useState, useRef, useEffect } from 'react';
import ExternalLinks from '../ExternalLinks/ExternalLinks';
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
import data from '../data.json';

export default function Contact() {
  const [animateInView, setAnimateInView] = useState(false);
  const elementPosition = useRef(null);

  const sectionInView = () => {
    window.addEventListener('scroll', () => {
      if (
        window.scrollY >
        elementPosition.current.offsetTop - elementPosition.current.clientHeight
      ) {
        setAnimateInView(true);
      }
    });
  };

  useEffect(() => {
    sectionInView();
  }, []);
  return (
    <Element name="contact" className="element">
      <Styled.fade inView={animateInView}>
        <Styled.sectionContainer ref={elementPosition}>
          <Styled.contact>
            <Styled.number>04.</Styled.number>
            <Styled.subtitle>What's Next?</Styled.subtitle>
            <Styled.title>Get in touch</Styled.title>
            <Styled.text>
              I am looking for my next challenge, please contact on one of the
              channels below, thanks
            </Styled.text>
            <Styled.contactButton href="mailto:davidm.webdeveloper@gmail.com">
              Email me
            </Styled.contactButton>
            <ExternalLinks />
          </Styled.contact>
        </Styled.sectionContainer>
      </Styled.fade>
    </Element>
  );
}
