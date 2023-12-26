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
  input: '#171721' + 99,
  border: '#644ed7',
  buttonHover: '#854CE6',
};

export const lightTheme = {
  bg: '#F8F8FF', //#ffffff OLD COLOR
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
  input: '#e2e8f0', //#f0f3ff might do this color
  border: '#e2e8f0',
  buttonHover: '#854CE6',
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
      var(--purple-gradient-end) 80%
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
  // height: 100vh;
  // width: 100vw;

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
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const SkillsMainTitle = styled.div.attrs({
  className: 'SkillsMainTitle',
})`
  font-size: 34px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 30px;
  text-align: center;
  text-transform: uppercase;
`;

export const SkillsHubContainer = styled.div.attrs({
  className: 'SkillsHubContainer',
})`
  width: 100%;
  max-width: 4500px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 80px;

  gap: 30px;
  justify-content: center;
`;

export const SkillFrontBackOther = styled.div.attrs({
  className: 'SkillFrontBackOther',
})`
  width: 100%;
  max-width: 50%;
  background-color: ${({ theme }) => theme.card};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 18px 26px;

  @media (max-width: 768px) {
    max-width: 400px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
  }
`;

export const SkillHubTitle = styled.h2.attrs({
  className: 'SkillHubTitle',
})`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 25px;
  text-align: center;
`;

export const SkillList = styled.div.attrs({
  className: 'SkillList',
})`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
`;

export const SkillItem = styled.div.attrs({
  className: 'SkillItem',
})`
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: all 0.3s ease-in;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 5px 20px 30px;
    transform: scale(1.1);

    .SkillImage {
        transform: scale(1.5) translateY(-20px);

        .SkillImageImg {
            animation: bouncing 0.5s .3s infinite;
        }
    }

    .SkillItemText {      
        letter-spacing: 2px;
        font-weight: bold;
    }
}

@keyframes bouncing {
  from, to { transform: scale(1, 1); }
  25% { transform: scale(0.9, 1.1); }
  50% { transform: scale(1.1, 0.9); }
  75% { transform: scale(0.95, 1.05); }
`;

export const SkillItemText = styled.div.attrs({
  className: 'SkillItemText',
})`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export const SkillImage = styled.div.attrs({
  className: 'SkillImage',
})`
  transition: all 0.3s ease-in-out 0.1s;
`;
export const SkillImageImg = styled.img.attrs({
  className: 'SkillImageImg',
})`
  width: 25px;
  height: 25px;
  max-width: 75px;
  max-height: 75px;
  object-fit: contain;
`;

// About
export const AboutMainTitle = styled.div.attrs({
  className: 'AboutMainTitle',
})`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
`;
export const AboutBento = styled.div.attrs({
  className: 'Bento',
})`
  position: relative;
  width: 50%;
  margin: auto; //centers in the middle of page
`;

export const AboutBentoContainer = styled.div.attrs({
  className: 'AboutBentoContainer',
})`
  position: relative;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(8, 1fr);
  gap: 12px;
  //padding: 2rem;
  width: 100%;
  height: inherit;
  z-index: 10;

  @media (max-width: 769px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
export const AboutBentoBox = styled.div.attrs({
  className: 'BentoBox',
})`
  position: relative;
  backdrop-filter: blur(1rem);
  border-radius: 16px;

  background-color: ${({ theme }) => theme.card};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  allign-items: flex-end;
  //padding: 2rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;


//   Example https://css-tricks.com/almanac/properties/g/grid-area/
//   grid-area: 2 / 4 / 4 / 6;

//   /* is equivalent to: */
//   grid-row-start: 2;
//   grid-column-start: 4;
//   grid-row-end: 4;
//   grid-column-end: 6;
// }

  :nth-child(1) {
    grid-area: 1/1/3/7;
}

:nth-child(2) {
    grid-area: 1/7/3/9;
}

:nth-child(3) {
  grid-area: 3/6/5/9;

}
:nth-child(4) {
  grid-area: 3/3/5/6;
}

:nth-child(5) {

  grid-area: 3/1/4/3;
}

:nth-child(6) {

grid-area: 4/1/5/3;
}
  }
`;
export const AboutBentoBoxParagraph = styled.div.attrs({
  className: 'AboutBentoBoxParagraph',
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

export const AboutBentoBoxParagraphTitle = styled.h2.attrs({
  className: 'AboutBentoBoxParagraphTitle',
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

export const AboutBentoBoxMissionStatementTitle = styled.h2.attrs({
  className: 'AboutBentoBoxMissionStatementTitle',
})`
font-style: italic;
font-size: 24px;
font-weight: 600;
color: ${({ theme }) => theme.primary};
margin-bottom: 10px;
text-align: center;
  }
`;

export const AboutBentoBoxText = styled.span.attrs({
  className: 'AboutBentoBoxText',
})`
  // overflow: hidden;
  // font-size: 2.4rem;
  @media (max-width: 960px) {
    text-align: center;
    align-items: center;
  }
`;

export const AboutBentoBoxImg = styled.img.attrs({
  className: 'AboutBentoBoxImg',
})`
  width: 50%;
  height: auto;
  object-fit: cover;

  @media (max-width: 960px) {
    width: 15%;
    height: auto;
  }
`;

export const AboutBentoBoxNumber = styled.span.attrs({
  className: 'AboutBentoBoxNumber',
})`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
`;

export const AboutBentoBoxSquareText = styled.span.attrs({
  className: 'AboutBentoBoxSquareText',
})`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

export const AboutBentoBoxSquareContainerText = styled.span.attrs({
  className: 'AboutBentoBoxSquareContainerText',
})`
  @media (max-width: 960px) {
    margin: 20px 20px 30px 20px;
    padding: 20px 20px;
  }
`;

export const AboutBentoBoxCenteredText = styled.div.attrs({
  className: 'AboutBentoBoxCenteredText',
})`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutBentoBoxCenteredCert = styled.div.attrs({
  className: 'AboutBentoBoxCenteredCert',
})`
  text-align: center;
  align-items: center;
`;

export const AboutBentoBoxCertImg = styled.img.attrs({
  className: 'AboutBentoBoxCertImg',
})`
  width: 35%;
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

//Services
export const ServicesMainContainer = styled.div.attrs({
  className: 'ServicesMainContainer',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

export const ServicesWrapper = styled.div.attrs({
  className: 'ServicesWrapper',
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

export const ServicesMainTitle = styled.div.attrs({
  className: 'ServicesMainTitle',
})`
  font-size: 34px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 30px;
  text-align: center;
  text-transform: uppercase;
`;

export const ServicesHubContainer = styled.div.attrs({
  className: 'ServicesHubContainer',
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 30px;

  gap: 30px;
  justify-content: center;
`;

export const ServicesCard = styled.div.attrs({
  className: 'ServicesCard',
})`
  width: 100%;
  max-width: 535px;
  background-color: ${({ theme }) => theme.card};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 18px 36px;

  &:hover {
    background-color: ${({ theme }) => theme.primary + 95};
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

export const ServicesHubTitle = styled.h2.attrs({
  className: 'ServicesHubTitle',
})`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 5px;
`;

export const ServicesParagraph = styled.p.attrs({
  className: 'ServicesParagraph',
})`
  font-size: 16px;
  line-height: 27px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    font-size: 14px;
    line-height: 26px;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 26px;
  }
`;

export const ServicesTextContent = styled.div.attrs({
  className: 'ServicesTextContent',
})`
  padding-left: 20px;
`;

export const ServicesImgIcon = styled.span.attrs({
  className: 'ServicesImgIcon',
})`
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 40px;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

export const ServicesMediaContent = styled.div.attrs({
  className: 'ServicesMediaContent',
})`
  display: flex;
`;

//Contact
export const ContactMainContainer = styled.div.attrs({
  className: 'ContactMainContainer',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding-bottom: 150px;
`;

export const ContactWrapper = styled.div.attrs({
  className: 'ContactWrapper',
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

export const ContactMainTitle = styled.div.attrs({
  className: 'ContactMainTitle',
})`
  font-size: 34px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 30px;
  text-align: center;
  text-transform: uppercase;
`;

export const ContactHubContainer = styled.div.attrs({
  className: 'ContactHubContainer',
})`
  width: 100%;
  display: flex;
  margin-top: 30px;
  gap: 30px;
  background-color: ${({ theme }) => theme.card};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 18px 36px;
  z-index: 1;
  }

  @media (max-width: 1099px) {
    max-width: 535px;
    padding: 20px 36px 0;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 20px 36px 0;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 20px 36px 0;
  }
`;
export const ContactHubMediaContainer = styled.div.attrs({
  className: 'ContactHubMediaContainer',
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 1099px) {
    display: none;
  }
`;
export const ContactHubMediaHeader = styled.h2.attrs({
  className: 'ContactHubMediaHeader',
})`
  color: ${({ theme }) => theme.text_primary};
  font-size: 90px;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 150px 40px 0;
  justify-content: center;
`;
export const ContactHubMediaVerticalHeader = styled.h2.attrs({
  className: 'ContactHubMediaVerticalHeader',
})`
  display: none;

  @media (max-width: 1099px) {
    display: block;
    color: ${({ theme }) => theme.text_primary};
    font-size: 26px;
    line-height: 1;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    justify-content: center;
  }
`;
export const ContactHubMediaBlob = styled.div.attrs({
  className: 'ContactHubMediaBlob',
})`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  overflow: hidden;
  border-radius: 16px;
`;

export const ContactHubFormContainer = styled.div.attrs({
  className: 'ContactHubFormContainer ',
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 30px 0px;
  max-width: 434px;
`;

export const ContactHubFormInput = styled.input.attrs({
  className: 'ContactHubFormInput',
})`
  width: 100%;
  height: 34px;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: 1px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  text-transform: uppercase;

  &:focus {
    border: 2px solid lightblue;
    outline: none;
  }
`;

export const ContactHubFormMessageInput = styled.textarea.attrs({
  className: 'ContactHubFormMessageInput',
})`
  width: 100%;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: 1px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  text-transform: uppercase;

  &:focus {
    border: 2px solid lightblue;
    outline: none;
  }
`;

export const ContactHubSendButton = styled.button.attrs({
  className: 'ContactHubSendButton',
})`
width: 100%;
height: 44px;
background-color: #644ed7;
color: white;
overflow: hidden;
cursor: pointer;
border: .01px solid ${({ theme }) => theme.border};
border-radius: 6px;
transition: all .2s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }}
`;

export const ContactHubAltSendButton = styled.div.attrs({
  className: 'ContactHubAltSendButton',
})`
width: 100%;
height: 44px;
transition: all .2s ease-in-out;

:hover {
  transform: translate3d(0px, -29px, 0px);
}}
`;

export const ContactHubAltSendButtonText = styled.span.attrs({
  className: 'ContactHubAltSendButtonText',
})`
  display: block;
  padding-top: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 16px;
`;

export const ContactHubAltSendButtonIcon = styled.div.attrs({
  className: 'ContactHubAltSendText',
})`
  display: block;
  padding-top: 12px;
  font-size: 16px;
`;

export const ContactBlobImgSVGWrapper = styled.div.attrs({
  className: 'ContactBlobImgSVGWrapper',
})`
  justify-self: center;
  position: absolute;
  top: 0;
  bottom: -6px;
  fill: #023f92;
  width: 92%;
  z-index: -1;
  animation: moveAnimation 10s ease-in-out infinite;
  transform-origin: 50% 50%;
  pointer-events: none;

  @keyframes moveAnimation {
    0% {
      transform: scale(1) translate(10px, -30px);
    }
    38% {
      transform: scale(0.8, 1) translate(40%, 30%) rotate(160deg);
    }
    40% {
      transform: scale(0.8, 1) translate(40%, 30%) rotate(160deg);
    }
    78% {
      transform: scale(1.3) translate(0%, 50%) rotate(-20deg);
    }
    80% {
      transform: scale(1.3) translate(0%, 50%) rotate(-20deg);
    }
    100% {
      transform: scale(1) translate(10px, -30px);
    }
  }
`;

//Projects
export const ProjectMainContainer = styled.div.attrs({
  className: 'ProjectMainContainer',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

export const ProjectMainTitle = styled.div.attrs({
  className: 'ProjectMainTitle',
})`
  font-size: 34px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 30px;
  text-align: center;
  text-transform: uppercase;
`;
export const ProjectCarousel = styled.div.attrs({
  className: 'Projectarousel',
})`
  //background-color: green;
  //background-color: ${({ theme }) => theme.card};
  overflow: hidden;
  padding: 100px 0;
  white-space: nowrap;
  width: 100%;
`;

export const ProjectCarouselSlide = styled.div.attrs({
  className: 'ProjectCarouselSlide',
})`
  display: inline-block;
  animation: slideAnimation 50s infinite linear;

  @keyframes slideAnimation {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
export const ProjectCarouselSlideContainer = styled.div.attrs({
  className: 'ProjectCarouselSlideContainer ',
})`
  :hover .ProjectCarouselSlide {
    animation-play-state: paused;
  }
`;

export const ProjectCarouselSlideImg = styled.img.attrs({
  className: 'ProjectCarouselSlideImg',
})`
  padding: 0 15px;
`;
