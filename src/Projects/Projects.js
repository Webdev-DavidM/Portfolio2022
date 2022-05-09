import React, { useState, useRef, useEffect } from 'react';
import * as Styled from './Projects.styles';
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
import Image from '../Images/testImage.jpg';
import data from '../data.json';

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

  console.log(data.projects);
  return (
    <Element name="work" className="element">
      <Styled.fade inView={animateInView}>
        <Styled.sectionContainer ref={elementPosition}>
          <Styled.projectContainer>
            <Header title="Some things I've built" number="03." />
            {data.projects.map((project, index) => (
              <Styled.project key={index + 1}>
                <Styled.projectImageContainer>
                  <Styled.image src={Image} />
                  <Styled.imageOverlay />
                </Styled.projectImageContainer>
                <Styled.projectDetails projectNumber={index}>
                  <Styled.subtitle>Featured Project</Styled.subtitle>
                  <Styled.title>{project.name}</Styled.title>
                  <Styled.projectDescription>
                    {project.description}
                  </Styled.projectDescription>
                  <Styled.techDetails>
                    <Styled.tech></Styled.tech>
                  </Styled.techDetails>
                  <Styled.socialLinks></Styled.socialLinks>
                </Styled.projectDetails>
              </Styled.project>
            ))}
          </Styled.projectContainer>
        </Styled.sectionContainer>
      </Styled.fade>
    </Element>
  );
}
