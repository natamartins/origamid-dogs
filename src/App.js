import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import UseStorage from "./userContext";

const App = () => {
  return (
    <BrowserRouter>
      <UseStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          {/* <Route path='' element={} /> */}
          {/* <Route path='' element={} /> */}
        </Routes>
        <Footer />
      </UseStorage>
    </BrowserRouter>
  );
};

export default App;
