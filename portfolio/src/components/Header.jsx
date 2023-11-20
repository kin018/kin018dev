import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import {
  AppHeader,
  HeaderMainContainer,
} from '../styledComponents/StyledComponents';

function Header() {
  return (
    <AppHeader>
      <HeaderMainContainer>
        <Logo />
        {/* <HeaderBurger></HeaderBurger> */}
        <Navbar />
        {/* <HeaderButtonContainer>TempButton</HeaderButtonContainer> */}
      </HeaderMainContainer>
    </AppHeader>
  );
}

export default Header;
