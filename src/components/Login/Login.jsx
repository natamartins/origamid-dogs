import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';

const Login = () => {
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
