import React, { useState, useEffect } from 'react';
import * as Styled from './nav.styles';
import { scroller } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollDirection from '../hooks/scrollDirection';
import MenuOpenCross from './animations/MenuOpenCross';
import MenuCloseCross from './animations/MenuCloseCross';
import { color } from '../Global/Variables';

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
      <Styled.ul>
        <Styled.li
          className="about"
          to="about"
          onClick={() => {
            scrollTo('about');
          }}
        >
          About
        </Styled.li>
        <Styled.li
          className="experience"
          to="experience"
          onClick={() => scrollTo('experience')}
        >
          {' '}
          Experience
        </Styled.li>
        <Styled.li
          className="work"
          to="work"
          onClick={() => {
            scrollTo('work');
            setScrolled(true);
          }}
        >
          {' '}
          Work
        </Styled.li>
        <Styled.li
          className="contact"
          to="contact"
          onClick={() => scrollTo('contact')}
        >
          Contact
        </Styled.li>
      </Styled.ul>
      <Styled.icon>Icon</Styled.icon>
      <Styled.hamburgerContainer onClick={() => setShowSideMenu(true)}>
        <MenuIcon fontSize="large" htmlColor={`${color.green}`} />
      </Styled.hamburgerContainer>
      <Styled.resume>
        <Styled.link>Resume</Styled.link>
      </Styled.resume>
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
