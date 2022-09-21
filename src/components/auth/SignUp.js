import React from "react";

const SignUp = () => {
  return (
    <div className="bg-gray-200 py-20">
      <div className="w-10/12 m-auto flex justify-center gap-20 items-center">
        <a
          href="/companysignup"
          target="_blank"
          className="bg-red-600 hover:bg-gray-900 text-gray-100 py-2 px-10 rounded-full text-center"
        >
          I'm a Company
        </a>
        <a
          href="/influencersignup"
          target="_blank"
          className="bg-red-600 hover:bg-gray-900 text-gray-100 py-2 px-10 rounded-full text-center"
        >
          I'm an Infuencer
        </a>
      </div>
    </div>
  );
};

export default SignUp;
