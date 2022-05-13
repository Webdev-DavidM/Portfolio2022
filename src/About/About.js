import React, { useState, useRef, useEffect } from 'react';
import * as Styled from './About.styles';
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
    'Styled components and SASS',
    'Typescript',
    'Node',
    'React testing library',
    'GraphQL',
    'Gatsby',
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
              I am passionate about using technology to solve problems
              creatively. I am a strong communicator gained from my time as a
              mortgage advisor and various customer service roles. I am a fast
              learner as shown by my multiple qualifications gained towards
              becoming a developer.
              <br />
              <br />I have gained experience as a developer working for a
              charity, a large retail organisation and currently a creative
              digital agency. During this time I have continued to learn new
              technologies such as Gatsby, Contentful, Styled components, Docker
              and testing with React testing library and Jest.
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
