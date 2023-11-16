import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme/Themes';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';

const Jawn = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Jawn>
        <Header />
        <Home />
        <div className="wrapper">
          <AboutMe />
          <Skills />
          <Services />
        </div>
        <Projects />
        <div className="wrapper">
          <Contact />
        </div>
        <Footer />
      </Jawn>
    </ThemeProvider>
  );
}

export default App;
