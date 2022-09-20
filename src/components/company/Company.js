import React from "react";

const Company = () => {
  return (
    <div className="w-10/12 m-auto my-20">
      <div className="overflow-x-auto">
        <p className="text-2xl mb-5">Company</p>
        <table className="w-full">
          <tr className="text-left">
            <th className="p-2 border">Company Name</th>
            <th className="p-2 border">Allocated Total Budget</th>
            <th className="p-2 border">Budget</th>
            <th className="p-2 border">Infuencer Hired</th>
            <th className="p-2 border">Reach</th>
            <th className="p-2 border">Engement</th>
            <th className="p-2 border">Website clicks</th>
          </tr>
          <tr className="border">
            <td className="p-2 border">Hr company</td>
            <td className="p-2 border">$34000</td>
            <td className="p-2 border">$15000</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">1700</td>
            <td className="p-2 border">11343</td>
            <td className="p-2 border">1221</td>
          </tr>
        </table>
      </div>
      <div className="mt-10 overflow-x-auto">
        <p className="text-2xl mb-5">Infuencer breakdown</p>
        <table className="w-full">
          <tr className="text-left">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Followers</th>
            <th className="p-2 border">Reach</th>
            <th className="p-2 border">Engement</th>
            <th className="p-2 border">Website clicks</th>
          </tr>
          <tr className="border">
            <td className="p-2 border">343691</td>
            <td className="p-2 border">4000</td>
            <td className="p-2 border">5000</td>
            <td className="p-2 border">$10</td>
            <td className="p-2 border">21</td>
          </tr>
          <tr className="border">
            <td className="p-2 border">343691</td>
            <td className="p-2 border">4000</td>
            <td className="p-2 border">5000</td>
            <td className="p-2 border">$10</td>
            <td className="p-2 border">21</td>
          </tr>
          <tr className="border">
            <td className="p-2 border">343691</td>
            <td className="p-2 border">4000</td>
            <td className="p-2 border">5000</td>
            <td className="p-2 border">$10</td>
            <td className="p-2 border">21</td>
          </tr>
        </table>
        <select className="border w-full py-2 focus:ring outline-none">
          <option>campaign-1</option>
          <option>campaign-2</option>
          <option>campaign-3</option>
        </select>
      </div>
    </div>
  );
};

export default Company;
