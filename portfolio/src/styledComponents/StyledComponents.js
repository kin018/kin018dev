import styled from 'styled-components';

//Blob
export const HomeBlobImg = styled.img`
  width: 200px;
`;

export const HomeBlobImgSVGWrapper = styled.div`
  order: 1;
  justify-self: center;
`;

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

// App.js Main styling
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

//ThemeIcon
export const StyledThemeDarkLightLogo = styled.i`
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.primary};
  }
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
  margin-right: -16px;
  svg {
    vertical-align: middle;
  }
`;

export const StyledThemeDarkLightLogoInvisible = styled.i`
visibility: hidden;
  }
`;

export const StyledThemeDarkLightLogoRightMargin = styled.div`
margin-right: 1rem
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

//HeaderDropdownMenu
export const HeaderDropdownMenuContainer = styled.div`
  @media screen and (min-width: 769px) {
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    /* background-color: ${({ theme }) => theme.primary}; */
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  }
`;
export const HeaderDropdownMenuGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
  }
`;

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

export const StyledHeaderDropdownMenuIcon = styled.i`
font-size: 1.2rem;
  }
`;

//Home Component
export const HomeMainContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.card_light};
  padding: 80px 30px;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HomeMainWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HomeDescriptionContainer = styled.div`
  width: 100%;
  order: 1; // Content order on larger screens

  @media (max-width: 960px) {
    order: 2; // Content order on smaller screens
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2; // Content order on smaller screens
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HomePictureContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const TitleName = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const TextSpan = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
