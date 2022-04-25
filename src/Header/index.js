import React from 'react';
import { Helmet } from 'react-helmet';
import * as Styled from './header.styles.js';

export default function index() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Scope+One&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto+Mono:wght@300&family=Scope+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <h1>hello</h1>
      <Styled.subtitle>goodbye</Styled.subtitle>
    </>
  );
}
