import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';

function Header() {
  return (
    <header className="header" id="header">
      <div>
        <Logo />
        <Navbar className="nav-container" />
      </div>
    </header>
  );
}

export default Header;
