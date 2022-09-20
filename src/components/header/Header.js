import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const [headerBg, setHeaderBg] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    });
  }, []);

  return (
    <div
      className={
        headerBg
          ? "shadow-md w-full fixed bg-white z-10 transition-all"
          : "w-full fixed transition-all"
      }
    >
      <div className="w-10/12 m-auto flex justify-between items-center py-5">
        <div
          className="sm:hidden hover:bg-gray-100 rounded-md w-7 h-6 flex justify-center items-center cursor-pointer gap-5"
          onClick={() => setMenu(!menu)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
        <NavLink to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="" />
          <div className="flex text-2xl font-extrabold">
            <p>HEALTH</p>
            <p className="text-red-600">CARE</p>
          </div>
        </NavLink>
        <ul className="sm:flex gap-10 hidden">
          <li className="hover:text-red-600 transition-all">
            <NavLink
              to="/"
              className={({ isActive }) => isActive && "text-red-600"}
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-red-600 transition-all">
            <NavLink
              to="/about"
              className={({ isActive }) => isActive && "text-red-600"}
            >
              About
            </NavLink>
          </li>
          <li className="hover:text-red-600 transition-all">
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive && "text-red-600"}
            >
              Contact
            </NavLink>
          </li>
          <li className="hover:text-red-600 transition-all">
            <NavLink
              to="/login"
              className={({ isActive }) => isActive && "text-red-600"}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      {menu && (
        <ul className="space-y-5 py-5 w-10/12 m-auto border-t block sm:hidden">
          <li className="hover:text-red-600 transition-all">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-red-600 transition-all">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-red-600 transition-all">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="hover:text-red-600 transition-all">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
