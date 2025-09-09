import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Herosec from "./Herosec";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import Ttd from "../Pages/Ttd";
import Monuments from "../Pages/Monuments";
import Hotels from "../Pages/Hotels";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();

  const hideCarouseltypever = [
    "/Pages/Login",
    "/Pages/Signup",
    "/Pages/Home",
    "/Pages/Ttd",
    "/Pages/Monuments",
    "/Pages/Hotels",
  ];

  const hideFooter = [
    "/",
    "/Pages/Login",
    "/Pages/Signup",
    "/Pages/Ttd",
    "/Pages/Monuments",
    "/Pages/Hotels",
  ];

  const shouldHideCarousel = hideCarouseltypever.includes(location.pathname);
  const shouldHideFooter = hideFooter.includes(location.pathname);

  return (
    <>
      {!shouldHideCarousel && <Herosec />}
      {!shouldHideFooter && <Footer />}

      <Routes>
        <Route path="/Pages/Login" element={<Login />} />
        <Route path="/Pages/Signup" element={<Signup />} />
        <Route path="/Pages/Home" element={<Home />} />
        <Route path="/Pages/Ttd" element={<Ttd />} />
        <Route path="/Pages/Monuments" element={<Monuments />} />
        <Route path="/Pages/Hotels" element={<Hotels />} />
        <Route path="/" element={null} />
      </Routes>
    </>
  );
}

export default Layout;
