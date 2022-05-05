import React, { useState, useRef, useEffect } from 'react';
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
import Header from '../SectionHeader/Header';

export default function Work() {
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
    <Element name="work" className="element">
      <Styled.fade inView={animateInView}>
        <Styled.sectionContainer ref={elementPosition}>
          <Styled.work>
            <Header title="Some things I've built" number="03." />
          </Styled.work>
        </Styled.sectionContainer>
      </Styled.fade>
    </Element>
  );
}
