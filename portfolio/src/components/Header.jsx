import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Navbar from './Navbar';
import Logo from './Logo';
import ThemeIcon from './ThemeIcon';
import {
  AppHeader,
  HeaderMainContainer,
  HeaderBurger,
  HeaderBurgerNavBtns,
} from '../styledComponents/StyledComponents';

function Header({ toggleTheme, isDarkTheme }) {
  return (
    <AppHeader>
      <HeaderMainContainer>
        <Logo />
        <HeaderBurger>
          <HeaderBurgerNavBtns>
            <ThemeIcon toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            <FaBars />
          </HeaderBurgerNavBtns>
        </HeaderBurger>
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </HeaderMainContainer>
    </AppHeader>
  );
}

export default Header;
