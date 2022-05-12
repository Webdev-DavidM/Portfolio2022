import React from 'react';
import * as Styled from './Footer.styles';
import ExternalLinks from '../ExternalLinks/ExternalLinks';

export default function Footer() {
  return (
    <Styled.Footer>
      <Styled.FooterLeft>
        <ExternalLinks direction="column" />
      </Styled.FooterLeft>
      <Styled.FooterRight></Styled.FooterRight>
    </Styled.Footer>
  );
}
