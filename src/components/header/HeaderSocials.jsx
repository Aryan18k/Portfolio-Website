import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/aryan-karnati-2a39461aa/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Rasif-Taghizada" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials