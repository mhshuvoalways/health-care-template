import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logofooter.png";

const Footer = () => {
  return (
    <div className="bg-red-600 text-gray-200 py-10">
      <div className="w-10/12 m-auto flex justify-between gap-10 flex-wrap">
        <div className="w-full sm:w-3/12">
          <img src={Logo} alt="" />
          <p className="mt-2">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide.
          </p>
        </div>
        <div className="space-y-3">
          <p className="border-b-2 border-gray-200 text-xl">Social networks</p>
          <Link
            to="/"
            className="hover:text-gray-300 transition-all flex items-center gap-2 text-xl"
          >
            <i className="fa-brands fa-facebook"></i>
            <p>Facebook</p>
          </Link>
          <Link
            to="/"
            className="hover:text-gray-300 transition-all flex items-center gap-2 text-xl"
          >
            <i className="fa-brands fa-twitter"></i>
            <p>Twitter</p>
          </Link>
          <Link
            to="/"
            className="hover:text-gray-300 transition-all flex items-center gap-2 text-xl"
          >
            <i className="fa-brands fa-instagram"></i>
            <p>Instagram</p>
          </Link>
        </div>
        <ul className="space-y-3">
          <li className="border-b-2 border-gray-200 text-xl">Menu</li>
          <li className="hover:text-gray-900 transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-900 transition-all">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-900 transition-all">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-gray-900 transition-all">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
