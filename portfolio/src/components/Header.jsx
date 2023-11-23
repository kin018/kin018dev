import React from 'react';
import { FaBars } from 'react-icons/fa';
// import { IoClose } from 'react-icons/io5';
import Navbar from './Navbar';
import Logo from './Logo';
import ThemeIcon from './ThemeIcon';
import {
  AppHeader,
  HeaderMainContainer,
  HeaderThemeMobileMenuWrapper,
  HeaderThemeMobileMenuBtns,
} from '../styledComponents/StyledComponents';

function Header({ toggleTheme, isDarkTheme }) {
  return (
    <AppHeader>
      <HeaderMainContainer>
        <Logo />
        <HeaderThemeMobileMenuWrapper>
          <HeaderThemeMobileMenuBtns>
            <ThemeIcon toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            <FaBars />
            {/* <IoClose /> */}
          </HeaderThemeMobileMenuBtns>
        </HeaderThemeMobileMenuWrapper>
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </HeaderMainContainer>
    </AppHeader>
  );
}

export default Header;
