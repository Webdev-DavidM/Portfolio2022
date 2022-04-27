import React, { useState } from 'react';
import * as Styled from './nav.styles';
import { scroller } from 'react-scroll';
import Hamburger from './hamburger/Hamburger';
export default function Nav() {
  const [animateInView, setAnimateInView] = useState(false);

  const scrollTo = (element) => {
    scroller.scrollTo(`${element}`, {
      duration: 1200,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Styled.navContainer>
      <Styled.desktopNavBar>
        <Styled.ul>
          <li>
            <a className="about" to="about" onClick={() => scrollTo('about')}>
              Contact
            </a>
          </li>
          <li>
            <a
              className="experience"
              to="experience"
              onClick={() => scrollTo('experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a className="work" to="work" onClick={() => scrollTo('work')}>
              Work
            </a>
          </li>
          <li>
            <a
              className="contact"
              to="contact"
              onClick={() => scrollTo('contact')}
            >
              Contact
            </a>
          </li>
        </Styled.ul>
      </Styled.desktopNavBar>
      <Styled.mobileSideNavBar></Styled.mobileSideNavBar>
      <Hamburger className="hamburger" />
    </Styled.navContainer>
  );
}
