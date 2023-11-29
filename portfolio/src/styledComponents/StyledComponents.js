import styled from 'styled-components';

//Blob
export const HomeBlobImgSVGWrapper = styled.div.attrs({
  className: 'HomeBlobImgSVGWrapper',
})`
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
  // card: '#211D35',
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
  // text_secondary: '#48494a',
  text_secondary: 'black',
  card: '#FFFFFF',
  card_light: 'rgba(255, 255, 255, 1)',
  button: '#5c5b5b',
  white: '#FFFFFF',
  black: '#000000',
};

// Logo
export const LogoWrapper = styled.img.attrs({
  className: 'LogoWrapper',
})`
  display: flex;
  align-items: center;
  height: 75px;
  width: 75px;
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
export const MainAppContainer = styled.div.attrs({
  className: 'MainAppContainer',
})`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

export const GradientWrapper = styled.div.attrs({
  className: 'GradientWrapper',
})`
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
export const NavbarContainer = styled.ul.attrs({
  className: 'NavbarContainer',
})`
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

export const StyledNavLink = styled.a.attrs({
  className: 'StyledNavLink',
})`
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
export const FooterMainContainer = styled.div.attrs({
  className: 'FooterMainContainer',
})`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

export const FooterWrapper = styled.footer.attrs({
  className: 'FooterWrapper',
})`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;
export const Copyright = styled.p.attrs({
  className: 'Copyright',
})`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

export const SocialMediaIconDiv = styled.div.attrs({
  className: 'SocialMediaIconDiv',
})`
  display: flex;
  margin-top: 1rem;
`;

export const SocialMediaIconLink = styled.a.attrs({
  className: 'SocialMediaIconLink',
})`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) =>
    theme.text_primary}; //This changes the Icon Color but may need to change TextLoop Color because I do not like that they match

  transition: color 0.2s ease-in-out;
  &:hover {
    transform: translateY(-1px);
    color: ${({ theme }) => theme.primary};
  }
`;

export const FooterName = styled.h1.attrs({
  className: 'FooterName',
})`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

export const FooterLink = styled.a.attrs({
  className: 'FooterLink',
})`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem; //Need to change font size this is too large currently
  transition: color 0.2s ease-in-out;

  &:hover {
    transform: translateY(-1px);
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FooterNav = styled.nav.attrs({
  className: 'FooterNav',
})`
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
export const StyledThemeDarkLightLogo = styled.i.attrs({
  className: 'StyledThemeDarkLightLogo',
})`
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

// Header
export const AppHeader = styled.div.attrs({
  className: 'AppHeader',
})`
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

export const HeaderMainContainer = styled.div.attrs({
  className: 'HeaderMainContainer',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const HeaderThemeMobileMenuWrapper = styled.div.attrs({
  className: 'HeaderThemeMobileMenuWrapper',
})`
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

export const HeaderThemeMobileMenuBtns = styled.div.attrs({
  className: 'HeaderThemeMobileMenuBtns',
})`
  display: flex;
  align-items: center;
  margin-right: -16px;

  svg {
    vertical-align: middle;
  }
`;

export const StyledThemeDarkLightLogoInvisible = styled.i.attrs({
  className: 'StyledThemeDarkLightLogoInvisible',
})`
visibility: hidden;
  }
`;

export const StyledThemeDarkLightLogoRightMargin = styled.div.attrs({
  className: 'StyledThemeDarkLightLogoRightMargin',
})`
  margin-right: 1rem
  }
`;

export const HeaderBurgerMenu = styled.div.attrs({
  className: 'HeaderBurgerMenu',
})`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 50px;
  gap: 16px;
  width: 100%;
  padding: 10px 40px;
  background: ${({ theme }) => theme.card_light};
  transition: all 0.6s ease-in-out;
  transform: ${({ isDropdownActive }) =>
    isDropdownActive ? 'translateY(0)' : 'translateY(-100%)'};
  border-radius: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isDropdownActive }) => (isDropdownActive ? '100%' : '0')};
  z-index: ${({ isDropdownActive }) => (isDropdownActive ? '1000' : '-1000')};
  position: absolute;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 65%;
    transform: translateX(-50%);
    width: 30px;
    height: 20px;
    background: ${({ theme }) => theme.card_light};
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
`;

export const HeaderDropdownMenuContainer = styled.div.attrs({
  className: 'HeaderDropdownMenuContainer',
})`
  @media screen and (min-width: 769px) {
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.primary}; */
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  }
`;

export const StyledHeaderDropdownMenuLink = styled.a.attrs({
  className: 'StyledHeaderDropdownMenuLink',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.813rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const StyledHeaderDropdownMenuIcon = styled.i.attrs({
  className: 'StyledHeaderDropdownMenuIcon',
})`
font-size: 1.2rem;
  }
`;

//Home Component
export const HomeMainContainer = styled.div.attrs({
  className: 'HomeMainContainer',
})`
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

export const HomeMainWrapper = styled.div.attrs({
  className: 'HomeMainWrapper',
})`
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

export const HomeDescriptionContainer = styled.div.attrs({
  className: 'HomeDescriptionContainer',
})`
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

export const HomePictureContainer = styled.div.attrs({
  className: 'HomePictureContainer',
})`
  //Animation for Blob

  animation: updown 6s linear infinite;
  @keyframes updown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px; //previous 80px
  }

  @media (max-width: 640px) {
    margin-bottom: 5px; //previous 30px
  }
`;

export const TitleName = styled.div.attrs({
  className: 'TitleName',
})`
  font-weight: 700;
  font-size: 44px;
  line-height: 58px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 1102px){
    font-weight: 700;
    font-size: 42px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 66px;
    @media (max-width: 960px) {
      text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div.attrs({
  className: 'TextLoop',
})`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 55px;
  white-space: nowrap;

  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 1102px){
    font-weight: 600;
    font-size: 28.5px;
    display: flex;
    gap: 12px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 62px;
    white-space: nowrap;

    @media (max-width: 960px) {
      text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const TextSpan = styled.span.attrs({
  className: 'TextSpan',
})`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div.attrs({
  className: 'SubTitle',
})`
  font-size: 18px;
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

export const HomeSocialMediaVerticalDiv = styled.div.attrs({
  className: 'HomeSocialMediaVerticalDiv',
})`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-right: 1rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.25rem;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const HomeSocialMediaHorizantalDiv = styled.div.attrs({
  className: 'HomeSocialMediaHorizantalDiv',
})`
  font-size: 1.25rem;

  @media (min-width: 961px) {
    display: none;
  }
`;

// About
export const AboutTitle = styled.h2.attrs({
  className: 'AboutTitle',
})`
font-size: 28px;
font-weight: 600;
color: ${({ theme }) => theme.text_secondary};
margin-bottom: 20px;
text-align: center;
  }
`;
export const AboutPuzzle = styled.div.attrs({
  className: 'AboutPuzzle',
})`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 75%;
  margin: 0 auto;

  @media (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const AboutLogoSquareImg = styled.img.attrs({
  className: 'AboutLogoSquareImg',
})`
  width: 30%;
  height: auto;
  object-fit: cover;

  @media (max-width: 960px) {
    width: 15%;
    height: auto;
  }
`;

export const AboutSquare = styled.div.attrs({
  className: 'AboutSquare',
})`
  display: flex;
  grid-column: span 1;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.card};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);

  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.5);
    transform: translateY(-10px);
    filter: brightness(1.1);
`;

export const AboutHorizontal = styled.div.attrs({
  className: 'AboutHorizontal',
})`
  display: flex;
  grid-column: span 2;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.card};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);

  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.5);
    transform: translateY(-10px);
    filter: brightness(1.1);
  }
`;

export const CenteredContainer = styled.div.attrs({
  className: 'CenteredContainer',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 1681px) {
    width: 95%;
  }

  @media (max-width: 1451px) {
    width: 90%;
  }

  @media (max-width: 1151px) {
    width: 80%;
  }

  @media (max-width: 960px) {
    flex-direction: column;

    .child1 {
      order: 2;
    }

    .child2 {
      order: 1;
      display: none;
    }

    .child3 {
      order: 4;
    }

    .child4 {
      order: 3;
    }

    .child5 {
      order: 5;
    }

    .child6 {
      order: 6;
    }
  }
`;

export const AboutContainer = styled.div.attrs({
  className: 'AboutContainer',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

export const AboutWrapper = styled.div.attrs({
  className: 'AboutWrapper',
})`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const AboutParagraph = styled.div.attrs({
  className: 'AboutParagraph',
})`
  font-weight:900px
  line-height: 1.3em;
  box-sizing: border-box;
  margin: 20px 20px;
  padding: 20px 20px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_secondary};
`;

export const AboutNumber = styled.span.attrs({
  className: 'AboutNumber',
})`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
`;
export const AboutCenteredText = styled.div.attrs({
  className: 'AboutCenteredText',
})`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutSquareText = styled.span.attrs({
  className: 'AboutSquareText',
})`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

export const AboutSquareContainerText = styled.span.attrs({
  className: 'AboutSquareContainerText',
})`
  @media (max-width: 960px) {
    margin: 20px 20px 30px 20px;
    padding: 20px 20px;
  }
`;

export const AboutParagraphTitle = styled.h2.attrs({
  className: 'AboutParagraphTitle',
})`
font-size: 24px;
font-weight: 600;
color: ${({ theme }) => theme.primary};
margin-bottom: 10px;
text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    font-weight: 600;
  }
`;
export const AboutMissionStatementTitle = styled.h2.attrs({
  className: 'AboutMissionStatementTitle',
})`
font-style: italic;
font-size: 24px;
font-weight: 600;
color: ${({ theme }) => theme.primary};
margin-bottom: 10px;
text-align: center;
  }
`;

export const AboutCertImg = styled.img.attrs({
  className: 'AboutCertImg',
})`
  // width: 40%; //square
  width: 20%; //horizontal
  height: auto;
  object-fit: cover;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.5px solid ${({ theme }) => theme.primary};
  }

  @media (max-width: 960px) {
    width: 19%; //horizontal
  }
`;

export const AboutCenteredCert = styled.div.attrs({
  className: 'AboutCenteredCert',
})`
  text-align: center;
  align-items: center;
`;

export const AboutText = styled.div.attrs({
  className: 'AboutText',
})`
  @media (max-width: 960px) {
    text-align: center;
    align-items: center;
  }
`;

// Skills
export const SkillsMainContainer = styled.div.attrs({
  className: 'SkillsMainContainer',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

export const SkillsWrapper = styled.div.attrs({
  className: 'SkillsWrapper',
})`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const SkillsMainTitle = styled.div.attrs({
  className: 'SkillsMainTitle',
})`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 30px;
  //margin-bottom: 10px;
  text-align: center;
`;

export const SkillsHubContainer = styled.div.attrs({
  className: 'SkillsHubContainer',
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

export const Skill = styled.div.attrs({
  className: 'Skill',
})`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.card};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

export const SkillHubTitle = styled.h2.attrs({
  className: 'SkillHubTitle',
})`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

export const SkillList = styled.div.attrs({
  className: 'SkillList',
})`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

export const SkillItem = styled.div.attrs({
  className: 'SkillItem',
})`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export const SkillImage = styled.img.attrs({
  className: 'SkillImage',
})`
  width: 24px;
  height: 24px;
`;

// Services

//Projects

//Contact
