import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dogs from "../assets/dogs.svg";
import { userContext } from "../userContext";

const Header = () => {
  const { data, userLogout } = useContext(userContext);

  return (
    <header className="header">
      <nav className="container navbar">
        <Link className="navbar_logo" to="/">
          <img src={Dogs} alt="logo dogs" />
        </Link>
        {data ? (
          <>
            <Link className="navbar_login" to="/conta">
              {data.nome}
            </Link>
            <button onClick={userLogout}>Sair</button>
          </>
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
