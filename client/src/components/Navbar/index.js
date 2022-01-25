import React from 'react';
import './styles.scss';
// Assets
import Logo from '../../assets/img/clarke-logo.svg';
import Avatar from '../../assets/icons/avatar.svg';

const Navbar = () => {
  return (
    <header className="Navbar">
      <img src={Logo} alt="Logo Clarke" />
      <img src={Avatar} alt="Avatar user" />
    </header>
  );
};

export default Navbar;
