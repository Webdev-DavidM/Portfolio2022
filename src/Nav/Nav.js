import React, { useState } from 'react';
import * as Styled from './nav.styles';
import { scroller } from 'react-scroll';
import Hamburger from './hamburger/Hamburger';
export default function Nav() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const scrollTo = (element) => {
    scroller.scrollTo(`${element}`, {
      duration: 1200,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Styled.navContainer>
      <Styled.desktopNavBar>
        <ul className="links">
          <li>
            <span
              className="about"
              to="about"
              onClick={() => scrollTo('about')}
            >
              Contact
            </span>
          </li>
          <li>
            <span
              className="experience"
              to="experience"
              onClick={() => scrollTo('experience')}
            >
              Experience
            </span>
          </li>
          <li>
            <span className="work" to="work" onClick={() => scrollTo('work')}>
              Work
            </span>
          </li>
          <span>
            <li
              className="contact"
              to="contact"
              onClick={() => scrollTo('contact')}
            >
              Contact
            </li>
          </span>
        </ul>
      </Styled.desktopNavBar>
      <Styled.mobileSideNavBar
        sideMenu={showSideMenu}
      ></Styled.mobileSideNavBar>
      <div onClick={() => setShowSideMenu(true)}>
        <Hamburger className="hamburger" />
      </div>
    </Styled.navContainer>
  );
}
