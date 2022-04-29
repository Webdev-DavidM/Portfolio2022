import React from 'react';
import * as Styled from './splashpage.styles';

export default function SplashPage() {
  const tech = [
    { tech: 'HTML', delay: '0', scale: 1 },
    { tech: 'CSS', delay: '1.4', scale: 1 },
    { tech: 'Javascript', delay: '2.6', scale: 1 },
    { tech: 'React', delay: '3.7', scale: 1 },
    { tech: 'Redux', delay: '4.8', scale: 1.2 },
    { tech: 'Gatsby', delay: '6', scale: 1.3 },
    { tech: 'Node', delay: '6.8', scale: 1.4 },
    { tech: 'Express', delay: '7.2', scale: 1.6 },
    { tech: 'Styled components', delay: '7.7', scale: 1.9 },
    { tech: 'GraphQL', delay: '8.2', scale: 2.3 },
    { tech: 'Typescript', delay: '8.6', scale: 2.8 },
    { tech: 'Contentful', delay: '9.1', scale: 3.6 },
    { tech: 'MongoDB', delay: '9.5', scale: 4.5 },
    { tech: 'SQL', delay: '9.8', scale: 6 },
    { tech: 'Contentful', delay: '9.9', scale: 7 },
    { tech: 'MongoDB', delay: '10', scale: 8.3 },
    { tech: 'SQL', delay: '10.1', scale: 15 },
  ];

  return (
    <Styled.splashPage>
      {tech.map((t) => (
        <>
          <Styled.tech delay={t.delay} scale={t.scale}>
            {t.tech}
          </Styled.tech>
          <Styled.cameraFlash />
          <Styled.name>David Mulholland</Styled.name>
          <Styled.role>Full stack developer</Styled.role>
        </>
      ))}
    </Styled.splashPage>
  );
}
