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

  return (
    <Element name="work" className="element">
      <Styled.fade inView={animateInView}>
        <Styled.sectionContainer ref={elementPosition}>
          <Styled.projectContainer>
            <Header title="Some things I've built" number="03." />
            {data.projects.map((project, index) => (
              <Styled.project key={index + 1}>
                <Styled.projectImageContainer>
                  <Styled.image backgroundImage={project.image} />
                  <Styled.imageOverlay />
                </Styled.projectImageContainer>
                <Styled.projectDetails projectNumber={index}>
                  <Styled.subtitle>Featured Project</Styled.subtitle>
                  <Styled.title>{project.name}</Styled.title>
                  <Styled.projectDescription projectNumber={index}>
                    {project.description}
                  </Styled.projectDescription>
                  <Styled.techDetails projectNumber={index}>
                    {project.tech.map((t) => (
                      <Styled.tech projectNumber={index}>{t}</Styled.tech>
                    ))}
                  </Styled.techDetails>
                  <Styled.ButtonContainer>
                    <Styled.Link
                      href={project.githubLink}
                      projectNumber={index}
                    >
                      Visit Project
                    </Styled.Link>
                    <Styled.Link
                      href={project.projectLink}
                      projectNumber={index}
                    >
                      Visit github
                    </Styled.Link>
                  </Styled.ButtonContainer>
                </Styled.projectDetails>
              </Styled.project>
            ))}
          </Styled.projectContainer>
        </Styled.sectionContainer>
      </Styled.fade>
    </Element>
  );
}
