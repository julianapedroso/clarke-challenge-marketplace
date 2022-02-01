import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Context
import { AuthContext } from '../../context/auth';
import './styles.scss';
// Assets
import Logo from '../../assets/img/clarke-logo.svg';
import ILogout from '../../assets/icons/logout.svg';

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="Navbar">
      <Link to={'/'}>
        <img src={Logo} alt="Logo Clarke" />
      </Link>
      <button className="btn__logout" onClick={handleLogout}>
        <img src={ILogout} alt="Logout icon" />
      </button>
    </header>
  );
};

export default Navbar;
