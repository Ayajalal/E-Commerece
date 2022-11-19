import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../header";
import Footer from "../footor";

const Layout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
