import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import {
  AppHeader,
  HeaderMainContainer,
  HeaderBurger,
} from '../styledComponents/StyledComponents';

function Header({ toggleTheme, isDarkTheme }) {
  return (
    <AppHeader>
      <HeaderMainContainer>
        <Logo />
        <HeaderBurger />
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </HeaderMainContainer>
    </AppHeader>
  );
}

export default Header;
