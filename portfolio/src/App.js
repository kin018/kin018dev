import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import HeaderDropdownMenu from './components/HeaderDropdownMenu'; //Temp
import {
  MainAppContainer,
  GradientWrapper,
  darkTheme,
  lightTheme,
} from './styledComponents/StyledComponents';

function App() {
  const [theme, setTheme] = useState(darkTheme);

  // Check if the current theme is 'lightTheme' this will be TRUE if the variable 'theme' is equal to lightTheme
  const isDarkTheme = theme === darkTheme;

  const toggleTheme = () => {
    // This checks and sets the theme to the opposite them
    setTheme(isDarkTheme ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />

        <MainAppContainer>
          <HeaderDropdownMenu />

          <Home />
          <GradientWrapper>
            <AboutMe />
            <Skills />
          </GradientWrapper>
          <Services />
          <Projects />
          <GradientWrapper>
            <Contact />
          </GradientWrapper>
          <Footer />
        </MainAppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
