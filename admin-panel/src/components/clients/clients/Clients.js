import React from "react";
import { Link } from "react-router-dom";
import InfluencersImg from "../../../assets/images/clients/client4.jpg";

const Clients = () => {
  return (
    <div>
      <div className="overflow-x-auto mt-5">
        <table className="w-full">
          <tr className="text-left">
            <th className="p-2 border border-gray-400">Name</th>
            <th className="p-2 border border-gray-400">Email</th>
            <th className="p-2 border border-gray-400">Running campaigns</th>
            <th className="p-2 border border-gray-400">Finished campaigns</th>
            <th className="p-2 border border-gray-400">Total cost</th>
            <th className="p-2 border border-gray-400">Others</th>
          </tr>
          <tr>
            <td className="p-2 border border-gray-400">
              <div className="flex gap-2 items-center">
                <div>
                  <img
                    src={InfluencersImg}
                    alt=""
                    className="w-12 rounded-full"
                  />
                </div>
                <div>
                  <p>Iva Ema</p>
                  <p className="text-sm text-gray-600">Crotia</p>
                </div>
              </div>
            </td>
            <td className="p-2 border border-gray-400">emehave@gmail.com</td>
            <td className="p-2 border border-gray-400">2</td>
            <td className="p-2 border border-gray-400">4</td>
            <td className="p-2 border border-gray-400">$290</td>
            <td className="p-2 border border-gray-400">
              <Link
                to="/influencercampaigns"
                className="bg-green-600 p-1 text-center text-white rounded-md"
              >
                Campaigns
              </Link>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-400">
              <div className="flex gap-2 items-center">
                <div>
                  <img
                    src={InfluencersImg}
                    alt=""
                    className="w-12 rounded-full"
                  />
                </div>
                <div>
                  <p>Iva Ema</p>
                  <p className="text-sm text-gray-600">Crotia</p>
                </div>
              </div>
            </td>
            <td className="p-2 border border-gray-400">emehave@gmail.com</td>
            <td className="p-2 border border-gray-400">2</td>
            <td className="p-2 border border-gray-400">4</td>
            <td className="p-2 border border-gray-400">$290</td>
            <td className="p-2 border border-gray-400">
              <Link
                to="/influencercampaigns"
                className="bg-green-600 p-1 text-center text-white rounded-md"
              >
                Campaigns
              </Link>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-400">
              <div className="flex gap-2 items-center">
                <div>
                  <img
                    src={InfluencersImg}
                    alt=""
                    className="w-12 rounded-full"
                  />
                </div>
                <div>
                  <p>Iva Ema</p>
                  <p className="text-sm text-gray-600">Crotia</p>
                </div>
              </div>
            </td>
            <td className="p-2 border border-gray-400">emehave@gmail.com</td>
            <td className="p-2 border border-gray-400">2</td>
            <td className="p-2 border border-gray-400">4</td>
            <td className="p-2 border border-gray-400">$290</td>
            <td className="p-2 border border-gray-400">
              <Link
                to="/influencercampaigns"
                className="bg-green-600 p-1 text-center text-white rounded-md"
              >
                Campaigns
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Clients;
