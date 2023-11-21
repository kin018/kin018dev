import React from 'react';
import { Link } from 'react-router-dom';
import { LogoWrapper } from '../styledComponents/StyledComponents';

function Logo() {
  return (
    <Link to="/">
      <LogoWrapper src="../images/LogoBrackets.png" alt="Logo" />
    </Link>
  );
}

export default Logo;
