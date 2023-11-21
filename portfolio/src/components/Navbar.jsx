import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import {
  NavbarContainer,
  StyledNavLink,
  StyledThemeDarkLightLogo,
} from '../styledComponents/StyledComponents';

function Navbar({ toggleTheme }) {
  return (
    <nav>
      <NavbarContainer>
        <StyledNavLink as={NavLink} to="/home">
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
        <StyledThemeDarkLightLogo>
          <FiSun />
        </StyledThemeDarkLightLogo>
        <StyledThemeDarkLightLogo>
          <FiMoon />
        </StyledThemeDarkLightLogo>
      </NavbarContainer>
    </nav>
  );
}

export default Navbar;
