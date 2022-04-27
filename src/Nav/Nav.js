import React, { useRef } from 'react';
import * as Styled from './nav.styles';
import { Link, scroller } from 'react-scroll';

export default function Nav() {
  const scrollTo = (element) => {
    scroller.scrollTo(`${element}`, {
      duration: 1200,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <>
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
        <a className="contact" to="contact" onClick={() => scrollTo('contact')}>
          Contact
        </a>
      </li>
    </>
  );
}
