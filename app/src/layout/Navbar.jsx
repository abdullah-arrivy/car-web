import React from "react";
import { Link } from "react-router";
import { navArray } from "../utils/NavbarArray";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-2 bg-black ">
      <div className="text-xl  text-gray-100">Logo</div>
      <ul className="flex space-x-4">
        {navArray.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>
              <span className="text-sm text-gray-200 hover:text-blue-500 transition-colors duration-300">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
