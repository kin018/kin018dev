import styled from 'styled-components';

// Theme Definitions
export const darkTheme = {
  bg: '#1C1C27',
  bgLight: '#1C1E27',
  primary: '#854CE6',
  text_primary: '#F2F3F4',
  text_secondary: '#b1b2b3',
  card: '#171721',
  card_light: 'rgba(25, 25, 36,1)',
  // card_light: 'rgba(25, 25, 36,.985)', //.985 is alpha channel in other others the transparency, with 0 being completely transparent and 1 being completely opaque
  // card_light: '#191924', og
  button: '#854CE6',
  white: '#FFFFFF',
  black: '#000000',
};

//Blob
export const HomeBlobImg = styled.img`
  width: 170px;
`;

export const HomeBlobImgSVGWrapper = styled.div`
  order: 1;
  justify-self: center;
`;

export const lightTheme = {
  bg: '#FFFFFF',
  bgLight: '#f0f0f0',
  primary: '#be1adb',
  text_primary: '#111111',
  text_secondary: '#48494a',
  card: '#FFFFFF',
  card_light: 'rgba(255, 255, 255, 1)',
  button: '#5c5b5b',
  white: '#FFFFFF',
  black: '#000000',
};
// App.js main styling
export const MainAppContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

export const GradientWrapper = styled.div`
  --purple-gradient-start: rgba(204, 0, 187, 0.15);
  --purple-gradient-end: rgba(201, 32, 184, 0);
  --blue-gradient-start: rgba(0, 70, 209, 0);
  --blue-gradient-end: rgba(0, 70, 209, 0.15);

  background: linear-gradient(
      38.73deg,
      var(--purple-gradient-start) 0%,
      var(--purple-gradient-end) 50%
    ),
    linear-gradient(
      141.27deg,
      var(--blue-gradient-start) 50%,
      var(--blue-gradient-end) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

// Header
export const AppHeader = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  top: 0;
  z-index: 10;
  position: sticky;

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const HeaderMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

// Logo
export const LogoWrapper = styled.img`
  display: flex;
  align-items: center;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background: no-repeat center center/cover;
  cursor: pointer;

  @media (max-width: 640px) {
    padding: 0;
    height: 60px
    width: 60px;
  }
`;
// Nav
export const NavbarContainer = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledNavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.5px solid ${({ theme }) => theme.primary};
  }
`;

export const StyledThemeDarkLightLogo = styled.a`
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const HeaderThemeMobileMenuWrapper = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;
export const HeaderThemeMobileMenuBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  margin-right: -16px;
  svg {
    vertical-align: middle;
  }
`;
// export const HeaderBurgerMenu = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 16px;
//   position: absolute;
//   top: 80px;
//   right: 0;
//   width: 100%;
//   padding: 12px 40px 24px 40px;

//   background: ${({ theme }) => theme.card_light};
//   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
//   border-radius: 0 0 20px 20px;

//   opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
//   z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

//   transition: all 0.6s ease-in-out;
//   transform: ${({ isOpen }) =>
//     isOpen ? 'translateY(0)' : 'translateY(-100%)'};
// `;

export const StyledHeaderDropdownMenuLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.813rem; /* Corrected syntax for rem unit */
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

//Footer
export const FooterMainContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;
export const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

export const SocialMediaIconDiv = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const SocialMediaIconLink = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
export const NameHeader = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem; //Need to change font size this is too large currently
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FooterNav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;
