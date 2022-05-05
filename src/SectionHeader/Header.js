import React from 'react';
import * as Styled from './Header.styles';

export default function Header({ number, title }) {
  return (
    <Styled.Header>
      <Styled.number>{number}</Styled.number>
      <Styled.title>{title}</Styled.title>
      <Styled.line />
    </Styled.Header>
  );
}
