import React from 'react';
import * as Styled from './Intro.styles';

export default function Intro() {
  return (
    <Styled.sectionContainer>
      <Styled.intro>
        <Styled.green>Hi, my name is</Styled.green>
        <Styled.name>David Mulholland</Styled.name>
        <Styled.job>Full stack developer</Styled.job>
        <Styled.description>
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Styled.description>
      </Styled.intro>
    </Styled.sectionContainer>
  );
}
