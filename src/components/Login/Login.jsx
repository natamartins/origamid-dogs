import React from "react";
import { useContext } from "react";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { userContext } from "../../userContext";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";

const Login = () => {
  const { login } = useContext(userContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <div className="login">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        {/* <Route path="/" element={<LoginPassworLost/>} />
        <Route path="/" element={<LoginPasswordReset />} /> */}
      </Routes>
    </div>
  );
};

export default Login;
