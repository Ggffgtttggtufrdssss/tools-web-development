import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Banner />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
