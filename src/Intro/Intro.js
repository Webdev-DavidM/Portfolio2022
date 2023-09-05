import React from "react";
import * as Styled from "./intro.styles";

export default function Intro() {
  return (
    <Styled.sectionContainer>
      <Styled.intro>
        <Styled.green>Hi, my name is</Styled.green>
        <Styled.name>David Mulholland</Styled.name>
        <Styled.job>Front end developer</Styled.job>
        <Styled.description>
          I enjoy combining technology and creativity to build websites and
          applications. I love learning new technologies to improve the user
          experience and making development faster and more efficent.
        </Styled.description>
      </Styled.intro>
    </Styled.sectionContainer>
  );
}
