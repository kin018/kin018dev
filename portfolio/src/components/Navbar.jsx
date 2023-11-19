import React from 'react';
import {
  StyledNavLink,
  NavbarContainer,
} from '../styledComponents/StyledComponents';

function Navbar() {
  return (
    <nav>
      <NavbarContainer>
        <StyledNavLink href="#home">Home</StyledNavLink>
        <StyledNavLink href="#about">About</StyledNavLink>
        <StyledNavLink href="#skills">Skills</StyledNavLink>
        <StyledNavLink href="#services">Services</StyledNavLink>
        <StyledNavLink href="#projects">Projects</StyledNavLink>
        <StyledNavLink href="#contact">Contact Me</StyledNavLink>
      </NavbarContainer>
    </nav>
  );
}

export default Navbar;
