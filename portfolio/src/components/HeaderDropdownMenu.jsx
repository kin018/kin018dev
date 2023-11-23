import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { StyledHeaderDropdownMenuLink } from '../styledComponents/StyledComponents';

function HeaderDropdownMenu() {
  return (
    <>
      <StyledHeaderDropdownMenuLink as={Link} to="/">
        <Icon icon="uil:estate" />
        Home
      </StyledHeaderDropdownMenuLink>
      <StyledHeaderDropdownMenuLink k as={Link} to="/about">
        <Icon icon="uil:user" />
        About
      </StyledHeaderDropdownMenuLink>
      <StyledHeaderDropdownMenuLink as={Link} to="/skills">
        <Icon icon="uil:file-alt" />
        Skills
      </StyledHeaderDropdownMenuLink>
      <StyledHeaderDropdownMenuLink as={Link} to="/services">
        <Icon icon="uil:briefcase-alt" />
        Services
      </StyledHeaderDropdownMenuLink>
      <StyledHeaderDropdownMenuLink as={Link} to="/projects">
        <Icon icon="uil:scenery" />
        Projects
      </StyledHeaderDropdownMenuLink>
      <StyledHeaderDropdownMenuLink as={Link} to="/contact">
        <Icon icon="uil:message" />
        Contact Me
      </StyledHeaderDropdownMenuLink>
    </>
  );
}

export default HeaderDropdownMenu;
