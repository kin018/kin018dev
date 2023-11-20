import React from 'react';
import Navbar from './Navbar';
import SocialMedia from './SocialMedia';
import {
  Copyright,
  FooterMainContainer,
  FooterWrapper,
  FooterNav,
  NameHeader,
  FooterLink,
} from '../styledComponents/StyledComponents';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterMainContainer>
      <FooterWrapper>
        <NameHeader>Kenechukwu Nwankwo</NameHeader>
        <FooterNav>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#about">Skills</FooterLink>
          <FooterLink href="#about">Services</FooterLink>
          <FooterLink href="#about">Projects</FooterLink>
        </FooterNav>
        <SocialMedia />
        <Copyright>
          &copy; {currentYear} Kenechukwu Nwankwo. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterMainContainer>
  );
}

export default Footer;
