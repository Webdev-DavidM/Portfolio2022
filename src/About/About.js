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
  const technologies = [
    'Javascript (ES6+)',
    'React',
    'Redux',
    'Styled components',
    'Typescript',
  ];

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
            <Styled.description>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS! Fast-forward to today, and I’ve had the privilege of
              working at an advertising agency, a start-up, a huge corporation,
              and a student-led design studio. My main focus these days is
              building accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients. I also recently launched a
              course that covers everything you need to build a web app with the
              Spotify API using Node & React. Here are a few technologies I’ve
              been working with recently:
            </Styled.description>
            <Styled.ul>
              {technologies.map((tech) => (
                <Styled.li>{tech}</Styled.li>
              ))}
            </Styled.ul>
          </Styled.about>
        </Styled.sectionContainer>
      </Styled.fade>
    </Element>
  );
}
