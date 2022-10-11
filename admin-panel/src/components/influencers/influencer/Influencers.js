import React from "react";
import { Link } from "react-router-dom";
import InfluencersImg from "../../../assets/images/clients/client1.jpg";

const Infuencers = ({ createListHandler, addInfluencerHandler }) => {
  return (
    <div>
      <div className="flex justify-between gap-5 mt-10">
        <input
          type="text"
          className="w-48 h-10 bg-gray-100 px-2 focus:outline-0 rounded-md"
          placeholder="Seach with name"
        />
        <div className="flex gap-5 flex-wrap">
          <div
            className="bg-gray-100 border border-red-600 hover:border-gray-800 hover:bg-gray-800 transition-all w-36 rounded-md cursor-pointer hover:text-white text-center py-2 flex gap-2 items-center justify-center text-red-500"
            onClick={createListHandler}
          >
            <i className="fa-solid fa-list"></i>
            <p>Create List</p>
          </div>
          <div className="bg-gray-100 border border-red-600 hover:border-gray-800 hover:bg-gray-800 transition-all w-36 rounded-md cursor-pointer hover:text-white text-center py-2 flex gap-2 items-center justify-center text-red-500">
            <i className="fa-solid fa-download"></i>
            <p>Export XLSX</p>
          </div>
          <label className="bg-gray-100 border border-red-600 hover:border-gray-800 hover:bg-gray-800 transition-all w-36 rounded-md cursor-pointer hover:text-white text-center py-2 flex gap-2 items-center justify-center text-red-500">
            <i className="fa-solid fa-download"></i>
            <p>Import XLSX</p>
            <input type="file" className="hidden" />
          </label>
          <p
            className="bg-red-600 w-36 hover:bg-gray-800 transition-all rounded-md cursor-pointer text-white text-center py-2"
            onClick={addInfluencerHandler}
          >
            + Add influencer
          </p>
        </div>
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="w-full">
          <tr className="text-left">
            <th className="border border-gray-400 text-center">
              <input
                type="checkbox"
                className="w-5 h-5 bg-gray-100 px-2 cursor-pointer"
              />
            </th>
            <th className="border border-gray-400">
              <input
                type="text"
                className="w-full h-10 bg-gray-100 px-2 focus:outline-0"
                placeholder="Username"
              />
            </th>
            <th className="border border-gray-400">
              <select className="w-full h-10 bg-gray-100 px-2 focus:outline-0">
                <option value="">Gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </th>
            <th className="border border-gray-400">
              <select className="w-full h-10 bg-gray-100 px-2 focus:outline-0">
                <option value="">Account</option>
                <option value="">Instagram</option>
                <option value="">Tiktok</option>
                <option value="">Youtube</option>
              </select>
            </th>
            <th className="border border-gray-400">
              <select className="w-full h-10 bg-gray-100 px-2 focus:outline-0">
                <option value="">Status</option>
                <option value="">Registerd</option>
                <option value="">Verified</option>
              </select>
            </th>
            <th className="border border-gray-400">
              <select className="w-full h-10 bg-gray-100 px-2 focus:outline-0">
                <option value="">Disease</option>
                <option value="">Breat cancer</option>
                <option value="">Neurodegenerative</option>
                <option value="">Lymphoma</option>
                <option value="">Lung cancer</option>
                <option value="">Cardiometabolic</option>
              </select>
            </th>
            <th className="px-2 border border-gray-400">Others</th>
          </tr>
          <tr className="border border-gray-400">
            <td className="p-2 border border-gray-400 text-center">
              <input
                type="checkbox"
                className="w-5 h-5 bg-gray-100 px-2 cursor-pointer"
              />
            </td>
            <td className="p-2 border border-gray-400">
              <div className="flex gap-2 items-center">
                <img
                  src={InfluencersImg}
                  alt=""
                  className="w-12 rounded-full"
                />
                <div>
                  <p>Iva Ema</p>
                  <p className="text-gray-600">ivaema</p>
                  <p className="text-sm text-gray-600">Crotia</p>
                  <p className="text-sm text-gray-600">Age: 29</p>
                  <p className="text-sm text-gray-600 flex gap-1 items-center">
                    <i className="fa-brands fa-instagram" />
                    <p>5k</p>
                  </p>
                </div>
              </div>
            </td>
            <td className="p-2 border border-gray-400">Female</td>
            <td className="p-2 border border-gray-400">Instagram</td>
            <td className="p-2 border border-gray-400 text-red-600">
              Register
            </td>
            <td className="p-2 border border-gray-400">Breast cancer</td>
            <td className="p-2 border border-gray-400 space-x-1">
              <Link
                to="/influencercampaigns"
                className="bg-green-600 p-1 text-center text-white rounded-md"
              >
                Campaigns
              </Link>
              <Link
                to="/influenceraudiences"
                className="bg-green-600 p-1 text-center text-white rounded-md"
              >
                Audiences
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Infuencers;
