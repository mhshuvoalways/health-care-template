import React from "react";

const Overview = () => {
  return (
    <div className="mt-20">
      <div>
        <p className="text-xl mb-5 font-semibold text-gray-700">
          Clients overview
        </p>
        <div className="flex gap-5 justify-between flex-wrap">
          <div className="border rounded-lg shadow-md p-10 w-72 bg-gray-400 flex items-center gap-5">
            <i className="fa-solid fa-users bg-gray-100 p-4 rounded-full"></i>
            <div className="text-white">
              <p className="font-semibold text-xl">Clients</p>
              <p className="font-semibold">100</p>
            </div>
          </div>
          <div className="border rounded-lg shadow-md p-10 w-72 bg-red-400 flex items-center gap-5">
            <i className="fa-solid fa-users bg-gray-100 p-4 rounded-full"></i>
            <div className="text-white">
              <p className="font-semibold text-xl">Total Budget</p>
              <p className="font-semibold">$400</p>
            </div>
          </div>
          <div className="border rounded-lg shadow-md p-10 w-72 bg-green-500 flex items-center gap-5">
            <i className="fa-solid fa-users bg-gray-100 p-4 rounded-full"></i>
            <div className="text-white">
              <p className="font-semibold text-xl">Verified Clients</p>
              <p className="font-semibold">60</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
