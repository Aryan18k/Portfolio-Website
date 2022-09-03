import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Aryan Karnati</h1>
        <HeaderSocials />
        <h5 className="text-light">Aspiring Software Developer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
