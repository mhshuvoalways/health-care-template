import React from "react";

const Campaigns = ({ addCampaign }) => {
  return (
    <div>
      <div className="flex justify-between gap-5">
        <input
          type="text"
          className="w-48 h-10 bg-gray-100 px-2 focus:outline-0 rounded-md"
          placeholder="Seach with name"
        />
        <div className="flex gap-5 flex-wrap">
          <div className="bg-gray-100 border border-red-600 hover:border-gray-800 hover:bg-gray-800 transition-all w-36 rounded-md cursor-pointer hover:text-white text-center py-2 flex gap-2 items-center justify-center text-red-500">
            <i className="fa-solid fa-download"></i>
            <p>Export XLSX</p>
          </div>
          <p
            className="bg-red-600 w-36 hover:bg-gray-800 transition-all rounded-md cursor-pointer text-white text-center py-2"
            onClick={addCampaign}
          >
            + Add campaign
          </p>
        </div>
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="w-full">
          <tr className="text-left">
            <th className="p-2 border border-gray-400">ID</th>
            <th className="p-2 border border-gray-400">Name</th>
            <th className="p-2 border border-gray-400">Product Name</th>
            <th className="p-2 border border-gray-400">Product description</th>
            <th className="p-2 border border-gray-400">Location</th>
            <th className="p-2 border border-gray-400">Influencers</th>
            <th className="p-2 border border-gray-400">Gender</th>
            <th className="p-2 border border-gray-400">Age Range</th>
            <th className="border border-gray-400">
              <select className="w-full h-10 bg-gray-100 px-2 focus:outline-0">
                <option value="">Disease Area</option>
                <option value="">Breat cancer</option>
                <option value="">Neurodegenerative</option>
                <option value="">Lymphoma</option>
                <option value="">Lung cancer</option>
                <option value="">Cardiometabolic</option>
              </select>
            </th>
            <th className="border border-gray-400">
              <select className="w-full h-10 bg-gray-100 px-2 focus:outline-0">
                <option value="">Social Network</option>
                <option value="">Instagram</option>
                <option value="">Tiktok</option>
                <option value="">Youtube</option>
              </select>
            </th>
            <td className="p-2 border border-gray-400">Start Date</td>
            <td className="p-2 border border-gray-400">End Date</td>
            <td className="p-2 border border-gray-400">Budget</td>
            <td className="p-2 border border-gray-400">Action</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-400">36901</td>
            <td className="p-2 border border-gray-400">Campaign 1</td>
            <td className="p-2 border border-gray-400">Digital app</td>
            <td className="p-2 border border-gray-400 w-40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </td>
            <td className="p-2 border border-gray-400">Germany</td>
            <td className="p-2 border border-gray-400">4</td>
            <td className="p-2 border border-gray-400">Female</td>
            <td className="p-2 border border-gray-400">35-45</td>
            <td className="p-2 border border-gray-400">Breast cancer</td>
            <td className="p-2 border border-gray-400">Instagram</td>
            <td className="p-2 border border-gray-400">01/10/2022</td>
            <td className="p-2 border border-gray-400">10/10/2022</td>
            <td className="p-2 border border-gray-400">$150</td>
            <td className="p-2 border border-gray-400 space-x-3">
              <i className="fa-solid fa-edit cursor-pointer"></i>
              <i className="fa-solid fa-trash cursor-pointer"></i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Campaigns;
