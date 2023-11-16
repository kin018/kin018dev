import styled from 'styled-components';

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
