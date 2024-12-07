import React from "react";
import { routeText } from "../routes/RouteText";
import { Link } from "react-router"; 

const navArray = [
  { label: "Home", path: routeText.HOME_URL },
  { label: "Feedback", path: routeText.FEED_BACK_URL },
];

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 ">
      <div className="text-2xl font-bold text-blue-600">Logo</div>
      <ul className="flex space-x-4">
        {navArray.map((item, index) => (
          <li key={index}>
            <Link 
              to={item.path} 
              className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
