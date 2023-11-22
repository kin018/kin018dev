import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Navbar from './Navbar';
import Logo from './Logo';
import {
  AppHeader,
  HeaderMainContainer,
  HeaderBurger,
} from '../styledComponents/StyledComponents';

function Header({ toggleTheme, isDarkTheme }) {
  // const [theme, setTheme] = useState(darkTheme);

  return (
    <AppHeader>
      <HeaderMainContainer>
        <Logo />
        <HeaderBurger>
          <FaBars />
        </HeaderBurger>
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </HeaderMainContainer>
    </AppHeader>
  );
}

export default Header;
