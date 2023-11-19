import styled from 'styled-components';

// App.js main stlying
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

//Header
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

export const HeaderBurger = styled.div`
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
//Nav
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
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

// Theme Definitions
export const darkTheme = {
  bg: '#1C1C27',
  bgLight: '#1C1E27',
  primary: '#854CE6',
  text_primary: '#F2F3F4',
  text_secondary: '#b1b2b3',
  card: '#171721',
  card_light: '#191924',
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
  button: '#5c5b5b',
};

//Logo

//export const header1 = styled(LinkJawn)`

// display: inline-block;
// height: 80px;
// width: 80px;
// border-radius: 40px;
// background-repeat: no-repeat;
// background-size: cover;
// background-position: center center;
// background-image: url('../images/kg-the-maker-logo-portrait.png');
// cursor: pointer;
