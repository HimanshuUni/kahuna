import React from "react";
import Navbar from "./helper/Navbar";

const NavLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default NavLayout;
