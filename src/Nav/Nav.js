import React, { useState, useEffect } from 'react';
import * as Styled from './nav.styles';
import { scroller } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollDirection from '../hooks/scrollDirection';
import MenuOpenCross from './animations/MenuOpenCross';
import MenuCloseCross from './animations/MenuCloseCross';
import { color } from '../Global/Variables';
import logo from '../Images/photo.jpeg';

export default function Nav() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const links = ['About', 'Experience', 'Work', 'Contact'];

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
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Styled.navContainer
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
      scrolled={scrolled}
    >
      <Styled.icon>
        <img src={logo} />
      </Styled.icon>
      <Styled.ul>
        {links.map((link, index) => (
          <Styled.li
            delay={`0.${index}`}
            key={link}
            className={link.toLowerCase()}
            to={link.toLowerCase()}
            onClick={() => scrollTo(link.toLowerCase())}
          >
            <Styled.span>0{index + 1}.</Styled.span>
            {link}
          </Styled.li>
        ))}
      </Styled.ul>
      <Styled.hamburgerContainer onClick={() => setShowSideMenu(true)}>
        <MenuIcon fontSize="large" htmlColor={`${color.green}`} />
      </Styled.hamburgerContainer>
      <Styled.resume>
        <Styled.link>Resume</Styled.link>
      </Styled.resume>
      <Styled.blurredBackground
        sideMenu={showSideMenu}
      ></Styled.blurredBackground>

      {/* Mobile side menu */}

      <Styled.mobileSideNavBar sideMenu={showSideMenu}>
        {showSideMenu ? (
          // i have created separate components for each animation as an animation is only run once when it enters the
          // vDOM and each animation is different
          <MenuOpenCross closeMenu={setShowSideMenu} />
        ) : (
          <MenuCloseCross closeMenu={setShowSideMenu} />
        )}
        <Styled.ulSideMenu>
          {links.map((link, index) => (
            <Styled.liSideMenu
              delay={`0.${index}`}
              key={link}
              className={link.toLowerCase()}
              to={link.toLowerCase()}
              onClick={() => {
                scrollTo(link.toLowerCase());
                setShowSideMenu(false);
              }}
            >
              <Styled.spanSideMenu>0{index + 1}.</Styled.spanSideMenu>
              {link}
            </Styled.liSideMenu>
          ))}
        </Styled.ulSideMenu>
        <Styled.resumeSideMenu>
          <Styled.link>Resume</Styled.link>
        </Styled.resumeSideMenu>
      </Styled.mobileSideNavBar>
    </Styled.navContainer>
  );
}
