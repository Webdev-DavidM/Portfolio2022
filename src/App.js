import React from 'react';
import Header from './Header/Header';
import GlobalStyles from './Global/CSS';
import Nav from './Nav/Nav';
import About from './About/About';
import Experience from './Experience/Experience';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import theme from './Global';
import { ThemeProvider } from 'styled-components';
import Intro from './Intro/Intro';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Nav />
        <Intro />
        <About />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
