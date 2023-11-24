import React from 'react';
import { LogoWrapper } from '../styledComponents/StyledComponents';
import { Link } from 'react-router-dom';

function Logo({ isDarkTheme }) {
  const logoSrc = isDarkTheme
    ? '../images/LogoWhiteBrackets.png'
    : '../images/LogoBlackBrackets.png';

  const altText = isDarkTheme ? 'LogoWhite' : 'LogoBlack';

  return (
    <Link to="/">
      <LogoWrapper src={logoSrc} alt={altText} />
    </Link>
  );
}

export default Logo;
