import React, { useState, useRef, useEffect } from 'react';
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
import Header from '../SectionHeader/Header';

export default function About() {
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
    <Element name="about" className="element">
      <Styled.fade inView={animateInView}>
        <Styled.sectionContainer ref={elementPosition}>
          <Styled.about>
            <Header title="About me" number="01." />
          </Styled.about>
        </Styled.sectionContainer>
      </Styled.fade>
    </Element>
  );
}
