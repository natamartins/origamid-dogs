import React, { createContext, useCallback, useEffect, useState } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";
import { useNavigate } from "react-router-dom";

export const userContext = createContext();

const UseStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error("Erro: Usuário inválido");
      const { token } = await tokenRes.json();

      window.localStorage.getItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLogin(false);
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false)
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <userContext.Provider
      value={{ userLogin, userLogout, data, login, loading, error }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UseStorage;
