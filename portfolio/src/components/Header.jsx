import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Navbar from './Navbar';
import Logo from './Logo';
import ThemeIcon from './ThemeIcon';
import {
  AppHeader,
  HeaderMainContainer,
  HeaderThemeMobileMenuBtns,
  HeaderThemeMobileMenuWrapper,
  StyledThemeDarkLightLogoRightMargin,
} from '../styledComponents/StyledComponents';

function Header({ toggleTheme, isDarkTheme }) {
  const [isMenuOpenToggle, setMenuOpenToggle] = useState(false);

  const handleMenuClick = () => {
    setMenuOpenToggle(!isMenuOpenToggle);
  };

  return (
    <AppHeader>
      <HeaderMainContainer>
        <Logo />
        <HeaderThemeMobileMenuWrapper>
          <HeaderThemeMobileMenuBtns>
            <StyledThemeDarkLightLogoRightMargin>
              <ThemeIcon toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            </StyledThemeDarkLightLogoRightMargin>
            {isMenuOpenToggle ? (
              <IoClose onClick={handleMenuClick} />
            ) : (
              <FaBars onClick={handleMenuClick} />
            )}
          </HeaderThemeMobileMenuBtns>
        </HeaderThemeMobileMenuWrapper>
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </HeaderMainContainer>
    </AppHeader>
  );
}

export default Header;
