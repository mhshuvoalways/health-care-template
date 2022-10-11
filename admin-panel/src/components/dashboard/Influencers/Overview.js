import React from "react";

const Overview = () => {
  return (
    <div>
      <div>
        <p className="text-xl mb-5 font-semibold text-gray-700">
          Influencers overview
        </p>
        <div className="flex gap-5 justify-between flex-wrap">
          <div className="border rounded-lg shadow-md p-10 w-72 bg-gray-400 flex items-center gap-5">
            <i className="fa-solid fa-users bg-gray-100 p-4 rounded-full"></i>
            <div className="text-white">
              <p className="font-semibold text-xl">Influencers</p>
              <p className="font-semibold">100</p>
            </div>
          </div>
          <div className="border rounded-lg shadow-md p-10 w-72 bg-red-700 flex items-center gap-5">
            <i class="fa-brands fa-instagram bg-gray-100 p-4 rounded-full"></i>
            <div className="text-white">
              <p className="font-semibold text-xl">Instagram Influencers</p>
              <p className="font-semibold">30</p>
            </div>
          </div>
          <div className="border rounded-lg shadow-md p-10 w-72 bg-gray-800 flex items-center gap-5">
            <i class="fa-brands fa-tiktok bg-gray-100 p-4 rounded-full"></i>
            <div className="text-white">
              <p className="font-semibold text-xl">Tiktok Influencers</p>
              <p className="font-semibold">30</p>
            </div>
          </div>
          <div className="border rounded-lg shadow-md p-10 w-72 bg-red-600 flex items-center gap-5">
            <i class="fa-brands fa-youtube bg-gray-100 p-4 rounded-full"></i>
            <div className="text-white">
              <p className="font-semibold text-xl">Youtube Influencers</p>
              <p className="font-semibold">30</p>
            </div>
          </div>
          <div className="border rounded-lg shadow-md p-10 w-72 bg-red-400 flex items-center gap-5">
            <i className="fa-solid fa-users bg-gray-100 p-4 rounded-full"></i>
            <div className="text-white">
              <p className="font-semibold text-xl">Registerd Influencers</p>
              <p className="font-semibold">40</p>
            </div>
          </div>
          <div className="border rounded-lg shadow-md p-10 w-72 bg-green-500 flex items-center gap-5">
            <i className="fa-solid fa-users bg-gray-100 p-4 rounded-full"></i>
            <div className="text-white">
              <p className="font-semibold text-xl">Verified Influencers</p>
              <p className="font-semibold">60</p>
            </div>
          </div>
          <div className="border rounded-lg shadow-md p-10 w-72 bg-purple-500 flex items-center gap-5">
            <i class="fa-solid fa-bullhorn bg-gray-100 p-4 rounded-full"></i>
            <div className="text-white">
              <p className="font-semibold text-xl">Running Campaigns</p>
              <p className="font-semibold">6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
