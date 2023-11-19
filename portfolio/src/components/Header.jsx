import React from 'react';
// import { Link as LinkJawn } from 'react-router-dom';
import Navbar from './Navbar';
//import Logo from './Logo';
import {
  AppHeader,
  HeaderMainContainer,
  // HeaderLogo,
  HeaderBurger,
  // HeaderButtonContainer,
} from '../styledComponents/StyledComponents';

function Header() {
  return (
    <AppHeader>
      <HeaderMainContainer>
        {/* <HeaderLogo>My Logo </HeaderLogo> */}
        <HeaderBurger></HeaderBurger>
        <Navbar />
        {/* <HeaderButtonContainer>TempButton</HeaderButtonContainer> */}
      </HeaderMainContainer>
    </AppHeader>
  );
}

export default Header;
