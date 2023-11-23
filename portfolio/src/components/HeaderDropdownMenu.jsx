import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import {
  StyledHeaderDropdownMenuLink,
  HeaderDropdownMenuList,
  StyledHeaderDropdownMenuIcon,
} from '../styledComponents/StyledComponents';

function HeaderDropdownMenu() {
  return (
    <HeaderDropdownMenuList>
      <StyledHeaderDropdownMenuLink as={Link} to="/">
        <StyledHeaderDropdownMenuIcon>
          <Icon icon="uil:estate" />
        </StyledHeaderDropdownMenuIcon>
        Home
      </StyledHeaderDropdownMenuLink>
      <StyledHeaderDropdownMenuLink k as={Link} to="/about">
        <StyledHeaderDropdownMenuIcon>
          <Icon icon="uil:user" />
        </StyledHeaderDropdownMenuIcon>
        About
      </StyledHeaderDropdownMenuLink>
      <StyledHeaderDropdownMenuLink as={Link} to="/skills">
        <StyledHeaderDropdownMenuIcon>
          <Icon icon="uil:file-alt" />
        </StyledHeaderDropdownMenuIcon>
        Skills
      </StyledHeaderDropdownMenuLink>
      <StyledHeaderDropdownMenuLink as={Link} to="/services">
        <StyledHeaderDropdownMenuIcon>
          <Icon icon="uil:briefcase-alt" />
        </StyledHeaderDropdownMenuIcon>
        Services
      </StyledHeaderDropdownMenuLink>
      <StyledHeaderDropdownMenuLink as={Link} to="/projects">
        <StyledHeaderDropdownMenuIcon>
          <Icon icon="uil:scenery" />
        </StyledHeaderDropdownMenuIcon>
        Projects
      </StyledHeaderDropdownMenuLink>
      <StyledHeaderDropdownMenuLink as={Link} to="/contact">
        <StyledHeaderDropdownMenuIcon>
          <Icon icon="uil:message" />
        </StyledHeaderDropdownMenuIcon>
        Contact Me
      </StyledHeaderDropdownMenuLink>
    </HeaderDropdownMenuList>
  );
}

export default HeaderDropdownMenu;
