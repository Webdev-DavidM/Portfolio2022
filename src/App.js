import React from 'react';
import Header from './Header/Header';
import GlobalStyles from './Global/CSS';
import Nav from './Nav/Nav';
import About from './About/About';
import Experience from './Experience/Experience';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Intro from './Intro/Intro';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Nav />
      <Intro />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


