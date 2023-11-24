import React from 'react';
import { LogoWrapper } from '../styledComponents/StyledComponents';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <LogoWrapper src="../images/LogoWhiteBrackets.png" alt="Logo" />
    </Link>
  );
}

export default Logo;
