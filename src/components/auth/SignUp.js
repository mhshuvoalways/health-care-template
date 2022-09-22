import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-gray-200 py-20">
      <div className="w-10/12 m-auto flex justify-center gap-20 items-center">
        <Link
          to="/companysignup"
          className="bg-red-600 hover:bg-gray-900 text-gray-100 py-2 px-10 rounded-full text-center"
        >
          I'm a Company
        </Link>
        <Link
          to="/influencersignup"
          className="bg-red-600 hover:bg-gray-900 text-gray-100 py-2 px-10 rounded-full text-center"
        >
          I'm an Infuencer
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
