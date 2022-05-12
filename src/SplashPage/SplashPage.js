import React from 'react';
import * as Styled from './Splashpage.styles';

export default function SplashPage({ showSplash }) {
  const tech = [
    { tech: 'HTML', delay: '0', scale: 1 },
    { tech: 'CSS', delay: '1', scale: 1 },
    { tech: 'Javascript', delay: '2', scale: 1 },
    { tech: 'React', delay: '3', scale: 1 },
    { tech: 'Redux', delay: '3.9', scale: 1.2 },
    { tech: 'Gatsby', delay: '4.8', scale: 1.3 },
    { tech: 'Node', delay: '5.6', scale: 1.4 },
    { tech: 'Express', delay: '6.5', scale: 1.6 },
    { tech: 'GraphQL', delay: '7.9', scale: 2.3 },
    { tech: 'Typescript', delay: '8.5', scale: 2.8 },
    { tech: 'Contentful', delay: '9.1', scale: 3.6 },
    { tech: 'SASS', delay: '9.5', scale: 4.5 },
    { tech: 'Testing', delay: '9.8', scale: 6 },
    { tech: 'Contentful', delay: '9.9', scale: 7 },
    { tech: 'Styled components', delay: '7.2', scale: 1.9 },
    { tech: 'MongoDB', delay: '10', scale: 8.3 },
    { tech: 'SQL', delay: '10.1', scale: 30 },
  ];

  return (
    <Styled.splashPage showSplash={showSplash}>
      {tech.map((t, index) => (
        <>
          <Styled.tech key={index} delay={t.delay} scale={t.scale}>
            {t.tech}
          </Styled.tech>
          <Styled.cameraFlash />
        </>
      ))}
    </Styled.splashPage>
  );
}
