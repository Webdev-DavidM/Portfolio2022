import React from 'react';
import * as Styled from './icons.styles';

export default function LinkedInIcon({ link }) {
  return (
    <Styled.Link href={link}>
      <Styled.Icon
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        height="25px"
        width="25px"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>LinkedIn</title>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </Styled.Icon>
    </Styled.Link>
  );
}
