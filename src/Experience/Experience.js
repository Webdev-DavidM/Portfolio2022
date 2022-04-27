import React, { useRef, useEffect, useState } from 'react';
import * as Styled from './experience.styles';
import { debounce, throttle } from 'lodash';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

export default function Experience() {
  const [animateInView, setAnimateInView] = useState(false);
  const elementPosition = useRef(null);

  const sectionInView = () => {
    window.addEventListener('scroll', () => {
      console.log(elementPosition.current.clientHeight);
      if (
        window.scrollY >
        elementPosition.current.offsetTop - elementPosition.current.clientHeight
      ) {
        console.log('experience on screen');
        setAnimateInView(true);
      }
    });
    // let sectionDistanceFromTop = elementPosition = useRef(null);
  };

  useEffect(() => {
    sectionInView();
  }, []);

  return (
    <Element name="experience" className="element">
      <Styled.container ref={elementPosition}>
        Experience
        <Styled.fade inView={animateInView}>Animate</Styled.fade>
      </Styled.container>
    </Element>
  );
}
