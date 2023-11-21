import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import {
  AppHeader,
  HeaderMainContainer,
  HeaderBurger,
} from '../styledComponents/StyledComponents';

function Header() {
  return (
    <AppHeader>
      <HeaderMainContainer>
        <Logo />
        <HeaderBurger />
        <Navbar />
      </HeaderMainContainer>
    </AppHeader>
  );
}

export default Header;
