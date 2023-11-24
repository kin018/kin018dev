import React from 'react';
import { LogoWrapper } from '../styledComponents/StyledComponents';
import { Link } from 'react-router-dom';

function Logo({ isDarkTheme }) {
  const WhiteCurlyBraces = '../images/LogoWhite.png';
  const BlackCurlyBraces = '../images/LogoBlack.png';
  const logoSrc = isDarkTheme ? WhiteCurlyBraces : BlackCurlyBraces;
  const altText = isDarkTheme ? 'LogoWhiteCurlyBraces' : 'LogoBlackCurlyBraces';

  return (
    <Link to="/">
      <LogoWrapper src={logoSrc} alt={altText} />
    </Link>
  );
}

export default Logo;
