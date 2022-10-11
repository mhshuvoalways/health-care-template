import React from "react";
import InfluencersImg from "../../../../assets/images/clients/client2.jpg";

const Infuencers = () => {
  return (
    <div className="mt-5">
      <div>
        <p className="text-xl mb-5 font-semibold text-gray-700">
          Audiences of Iva Ema Any
        </p>
        <input
          type="text"
          className="w-48 h-10 bg-gray-100 px-2 focus:outline-0"
          placeholder="Seach with Name"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full mt-5">
          <tr className="text-left">
            <th className="border border-gray-400">
              <input
                type="text"
                className="w-full h-10 bg-gray-200 px-2 focus:outline-0"
                placeholder="Username"
              />
            </th>
            <th className="border border-gray-400">
              <select className="w-full h-10 bg-gray-200 px-2 focus:outline-0">
                <option value="">Gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </th>
            <th className="px-2 border border-gray-400">Age</th>
            <th className="px-2 border border-gray-400">Location</th>
          </tr>
          <tr className="border border-gray-400">
            <td className="px-2 border border-gray-400">
              <div className="flex gapx-2 items-center">
                <img
                  src={InfluencersImg}
                  alt=""
                  className="w-12 rounded-full"
                />
                <div>
                  <p>Shova Twin</p>
                  <p className="text-gray-600">shovatwin</p>
                </div>
              </div>
            </td>
            <td className="px-2 border border-gray-400">Female</td>
            <td className="px-2 border border-gray-400">35</td>
            <td className="px-2 border border-gray-400">Crotia</td>
          </tr>
          <tr className="border border-gray-400">
            <td className="px-2 border border-gray-400">
              <div className="flex gapx-2 items-center">
                <img
                  src={InfluencersImg}
                  alt=""
                  className="w-12 rounded-full"
                />
                <div>
                  <p>Shova Twin</p>
                  <p className="text-gray-600">shovatwin</p>
                </div>
              </div>
            </td>
            <td className="px-2 border border-gray-400">Female</td>
            <td className="px-2 border border-gray-400">35</td>
            <td className="px-2 border border-gray-400">Crotia</td>
          </tr>
          <tr className="border border-gray-400">
            <td className="px-2 border border-gray-400">
              <div className="flex gapx-2 items-center">
                <img
                  src={InfluencersImg}
                  alt=""
                  className="w-12 rounded-full"
                />
                <div>
                  <p>Shova Twin</p>
                  <p className="text-gray-600">shovatwin</p>
                </div>
              </div>
            </td>
            <td className="px-2 border border-gray-400">Female</td>
            <td className="px-2 border border-gray-400">35</td>
            <td className="px-2 border border-gray-400">Crotia</td>
          </tr>
          <tr className="border border-gray-400">
            <td className="px-2 border border-gray-400">
              <div className="flex gapx-2 items-center">
                <img
                  src={InfluencersImg}
                  alt=""
                  className="w-12 rounded-full"
                />
                <div>
                  <p>Shova Twin</p>
                  <p className="text-gray-600">shovatwin</p>
                </div>
              </div>
            </td>
            <td className="px-2 border border-gray-400">Female</td>
            <td className="px-2 border border-gray-400">35</td>
            <td className="px-2 border border-gray-400">Crotia</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Infuencers;
