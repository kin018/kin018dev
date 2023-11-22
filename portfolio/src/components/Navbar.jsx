import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeIcon from './ThemeIcon';
import {
  NavbarContainer,
  StyledNavLink,
} from '../styledComponents/StyledComponents';

function Navbar({ toggleTheme, isDarkTheme }) {
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
        <ThemeIcon toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </NavbarContainer>
    </nav>
  );
}

export default Navbar;
