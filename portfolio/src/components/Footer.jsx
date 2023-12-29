import React from 'react';
import { Link } from 'react-scroll';
import SocialMedia from './SocialMedia';
import {
  Copyright,
  FooterMainContainer,
  FooterLink,
  FooterName,
  FooterNav,
  FooterWrapper,
  SocialMediaIconDiv,
} from '../styledComponents/StyledComponents';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterMainContainer>
      <FooterWrapper>
        <FooterName>Kenechukwu Nwankwo</FooterName>
        <FooterNav>
          {/* <Link to="about" smooth duration={500} offset={-100}>
            <FooterLink>About</FooterLink>
          </Link> */}
          <Link to="skills" smooth duration={500} offset={-100}>
            <FooterLink>Skills</FooterLink>
          </Link>
          <Link to="services" smooth duration={500} offset={-100}>
            <FooterLink>Services</FooterLink>
          </Link>
          <Link to="projects" smooth duration={500} offset={-100}>
            <FooterLink>Projects</FooterLink>
          </Link>
        </FooterNav>
        <SocialMediaIconDiv>
          <SocialMedia />
        </SocialMediaIconDiv>
        <Copyright>
          &copy; {currentYear} Kenechukwu Nwankwo. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterMainContainer>
  );
}

export default Footer;
