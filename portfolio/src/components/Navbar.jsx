import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import {
  NavbarContainer,
  StyledNavLink,
  StyledThemeDarkLightLogo,
} from '../styledComponents/StyledComponents';

function Navbar({ toggleTheme, isDarkTheme }) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <nav>
      <NavbarContainer>
        <StyledNavLink as={NavLink} to="/">
          Home
        </StyledNavLink>
        <StyledNavLink as={NavLink} to="/about">
          About
        </StyledNavLink>
        <StyledNavLink as={NavLink} to="/skills">
          Skills
        </StyledNavLink>
        <StyledNavLink as={NavLink} to="/services">
          Services
        </StyledNavLink>
        <StyledNavLink as={NavLink} to="/projects">
          Projects
        </StyledNavLink>
        <StyledNavLink as={NavLink} to="/contact">
          Contact Me
        </StyledNavLink>
        <StyledThemeDarkLightLogo onClick={onToggle}>
          {isToggled ? <FiSun /> : <FiMoon />}
        </StyledThemeDarkLightLogo>
      </NavbarContainer>
    </nav>
  );
}

export default Navbar;
