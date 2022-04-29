import React, { useState, useEffect } from 'react';
import * as Styled from './nav.styles';
import { scroller } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollDirection from '../hooks/scrollDirection';

import MenuOpenCross from './animations/MenuOpenCross';
import MenuCloseCross from './animations/MenuCloseCross';
export default function Nav() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (element) => {
    scroller.scrollTo(`${element}`, {
      duration: 1200,
      smooth: 'easeInOutQuart',
    });
  };

  useEffect;

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Styled.navContainer
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
      scrolled={scrolled}
    >
      <Styled.desktopNavBar>
        <ul className="links">
          <li
            className="about link"
            to="about"
            onClick={() => {
              scrollTo('about');
            }}
          >
            About
          </li>
          <li
            className="experience link"
            to="experience"
            onClick={() => scrollTo('experience')}
          >
            {' '}
            Experience
          </li>
          <li
            className="work link"
            to="work"
            onClick={() => {
              scrollTo('work');
              setScrolled(true);
            }}
          >
            {' '}
            Work
          </li>

          <li
            className="contact link"
            to="contact"
            onClick={() => scrollTo('contact')}
          >
            Contact
          </li>
        </ul>
        <button onClick={() => setShowSideMenu(true)}>
          <MenuIcon color="primary" />
        </button>
      </Styled.desktopNavBar>
      <Styled.mobileSideNavBar sideMenu={showSideMenu}>
        {showSideMenu ? (
          // i have created separate components for each animation as an animation is only run once when it enters the
          // vDOM and each animation is different
          <MenuOpenCross closeMenu={setShowSideMenu} />
        ) : (
          <MenuCloseCross closeMenu={setShowSideMenu} />
        )}
      </Styled.mobileSideNavBar>
    </Styled.navContainer>
  );
}
