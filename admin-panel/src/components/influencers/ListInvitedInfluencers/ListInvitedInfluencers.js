import React from "react";
import { Link } from "react-router-dom";
import InfluencersImg from "../../../assets/images/clients/client1.jpg";

const ListInvitedInfluencers = () => {
  return (
    <div>
      <div className="flex justify-between gap-5 mt-10">
        <input
          type="text"
          className="w-48 h-10 bg-gray-100 px-2 focus:outline-0 rounded-md"
          placeholder="Seach with ID"
        />
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="w-full">
          <tr className="text-left">
            <th className="px-2 border border-gray-400">Campaign ID</th>
            <th className="px-2 border border-gray-400">Name</th>
            <th className="px-2 border border-gray-400">Invited</th>
            <th className="px-2 border border-gray-400">Action</th>
            <th className="px-2 border border-gray-400">Others</th>
          </tr>
          <tr className="border border-gray-400">
            <td className="p-2 border border-gray-400">34362</td>
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
            <td className="p-2 border border-gray-400 text-green-600">
              Accept
            </td>
            <td className="p-2 border border-gray-400 text-center">
              <i className="fa-solid fa-trash cursor-pointer"></i>
            </td>
            <td className="p-2 border border-gray-400 text-center space-x-2">
              <Link
                to="/singlecampaign"
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

export default ListInvitedInfluencers;
