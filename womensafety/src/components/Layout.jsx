import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Content from "./Content";
import Safetybtn from "./Safetybtn";
import Login from "../pages/Login";
import Sign from "../pages/Sign";
import Rescue from "../pages/Rescue";
import Defence from "../pages/Defence";

function Layout() {
  const location = useLocation();

  const hideContentAndSafetybtnOn = [
    "/pages/Login",
    "/pages/Sign",
    "/pages/Rescue",
    "/pages/Defence",
  ];
  const hideNavbarOn = ["/pages/Login", "/pages/Sign"];

  const shouldHideContentAndSafetybtn = hideContentAndSafetybtnOn.includes(
    location.pathname
  );
  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      {!shouldHideContentAndSafetybtn && <Content />}
      {!shouldHideContentAndSafetybtn && <Safetybtn />}

      <Routes>
        <Route path="/Rescue" element={<Rescue />} />
        <Route path="/Defence" element={<Defence />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/pages/Sign" element={<Sign />} />
      </Routes>
    </>
  );
}

export default Layout;
