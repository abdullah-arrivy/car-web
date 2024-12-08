import React from "react";
import NavBar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className="p-10">{children}</main>
    </div>
  );
};
export default Layout;
