import React from "react";

const MediaForm = () => {
  return (
    <div>
      <div>
        <label>First Name*</label>
        <br />
        <input
          type="text"
          className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label>Last Name*</label>
        <br />
        <input
          type="text"
          className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label>Email*</label>
        <br />
        <input
          type="email"
          className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label>Company*</label>
        <br />
        <input
          type="text"
          className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label>Comment*</label>
        <textarea className="p-3 my-2 h-20 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring" />
      </div>
      <p className="bg-red-600 hover:bg-gray-900 text-gray-100 py-2 px-3 cursor-pointer rounded-full w-full sm:w-4/12 text-center">
        Send Message
      </p>
    </div>
  );
};

export default MediaForm;
