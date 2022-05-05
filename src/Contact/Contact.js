import React, { useState, useRef, useEffect } from 'react';
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
            <Styled.title>Get In Touch</Styled.title>
            <Styled.text>
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </Styled.text>
            <Styled.contactButton>Say Hello</Styled.contactButton>
          </Styled.contact>
        </Styled.sectionContainer>
      </Styled.fade>
    </Element>
  );
}
