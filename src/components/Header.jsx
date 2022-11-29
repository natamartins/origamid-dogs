import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Dogs from '../assets/dogs.svg';
import { UserContext } from '../userContext';

const Header = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className="header">
      <nav className="container navbar">
        <Link className="navbar_logo" to="/">
          <img src={Dogs} alt="logo dogs" />
        </Link>
        {data ? (
          <Link className="navbar_login" to="/conta">
            {data.nome}
            <button onClick={userLogout}>sair</button>
          </Link>
        ) : (
          <Link className="navbar_login" to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
