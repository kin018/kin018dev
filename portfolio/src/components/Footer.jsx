import React from 'react';
import { Link } from 'react-router-dom';
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
          <FooterLink as={Link} to="/about">
            About
          </FooterLink>
          <FooterLink as={Link} to="/skills">
            Skills
          </FooterLink>
          <FooterLink as={Link} to="/services">
            Services
          </FooterLink>
          <FooterLink as={Link} to="/projects">
            Projects
          </FooterLink>
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
