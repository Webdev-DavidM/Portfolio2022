import React from 'react';
import * as Styled from './hamburger.styles';

export default function Hamburger() {
  return (
    <Styled.hamburger for="check">
      <label for="check">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </Styled.hamburger>
  );
}
