import React from 'react';
import * as Styled from './hamburger.styles';

export default function Hamburger() {
  return (
    <Styled.hamburger htmlFor="check">
      <label htmlFor="check">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </Styled.hamburger>
  );
}
