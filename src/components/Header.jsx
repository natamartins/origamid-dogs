import React from 'react';
import { Link } from 'react-router-dom';
import Dogs from '../assets/dogs.svg';
const Header = () => {
  return (
    <header className="header">
      <nav className="container navbar">
        <Link className="navbar_logo" to="/">
          <img src={Dogs} alt="logo dogs" />
        </Link>
        <Link className="navbar_login" to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
