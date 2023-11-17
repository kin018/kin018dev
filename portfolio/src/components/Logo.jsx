import React from 'react';

function Logo() {
  const imagePath = process.env.PUBLIC_URL + '/images/Logo.png';
  return <img src={imagePath} alt="My Logo" />;
}

export default Logo;
