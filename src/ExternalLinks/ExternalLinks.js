import React from 'react';
import GithubIcon from '../icons/github.js';
import LinkedInIcon from '../icons/linkedin.js';
import * as Styled from './ExternalLinks.styles';

export default function ExternalLinks() {
  return (
    <Styled.ExternalLinks direction="row">
      <GithubIcon link="https://github.com/Webdev-DavidM" />
      <LinkedInIcon link="https://www.linkedin.com/in/david-mulholland-07b86319a/" />
    </Styled.ExternalLinks>
  );
}
