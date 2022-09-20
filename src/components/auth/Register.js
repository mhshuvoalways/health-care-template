import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { NavLink, Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-gray-200 py-20">
      <div className="w-10/12 m-auto">
        <div className="w-full md:w-6/12 border m-auto border-gray-100 p-5 shadow-md">
          <div className="flex justify-center gap-5">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-red-600 text-2xl" : " text-2xl"
              }
            >
              Login
            </NavLink>
            <p className="cursor-pointer text-2xl ">|</p>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "text-red-600 text-2xl" : " text-2xl"
              }
            >
              Register
            </NavLink>
          </div>
          <div className="mt-10">
            <p className="text-2xl mb-4">Register as a Company</p>
            <form className="space-y-2">
              <div>
                <label>Your First Name*</label>
                <br />
                <input
                  type="text"
                  className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label>Your Last Name*</label>
                <br />
                <input
                  type="text"
                  className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label>Your Company Name*</label>
                <br />
                <input
                  type="text"
                  className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label>Your Role*</label>
                <br />
                <input
                  type="text"
                  className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label>Your Email*</label>
                <br />
                <input
                  type="email"
                  className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label>Password*</label>
                <br />
                <input
                  type="password"
                  className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label>ReCAPTCHA*</label>
                <br />
                <ReCAPTCHA sitekey="6Lfk5MgcAAAAAP3QLHhsWot9le211BGzVs9PrUSJ" />
              </div>
              <br />
              <Link to="/login">
                <p className="bg-red-600 hover:bg-gray-900 text-gray-100 py-2 px-3 rounded-full w-full text-center">
                  Register
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
