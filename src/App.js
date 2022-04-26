import React from 'react';
import Header from './Header/Header';
import GlobalStyles from './Global/CSS';
import Nav from './Nav/Nav';
import About from './About/About';
import Experience from './Experience/Experience';
import MainProject from './MainProjects/MainProjects';
import Work from './Work/Work';
import ExtraProjects from './ExtraProjects/ExtraProjects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import * as theme from './Global/Variables';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Nav />
        <About />
        <Experience />
        <Work />
        <MainProject />
        <ExtraProjects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
