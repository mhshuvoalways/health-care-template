import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-6/12 m-auto py-20">
      <div className="w-full md:w-6/12 border m-auto border-gray-100 p-5 shadow-md">
        <div>
          <form className="space-y-2">
            <div>
              <label>Email*</label>
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
            <br />
            <Link to="/">
              <p className="bg-red-600 hover:bg-gray-900 text-gray-100 py-2 px-3 rounded-full w-full text-center">
                Login
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
