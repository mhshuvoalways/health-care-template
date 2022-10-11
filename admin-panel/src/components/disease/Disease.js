import React from "react";

const Clients = ({ addDiseareModal }) => {
  return (
    <div>
      <p
        className="bg-red-600 w-36 hover:bg-gray-800 transition-all rounded-md cursor-pointer text-white text-center py-2"
        onClick={addDiseareModal}
      >
        + Add Diseare
      </p>
      <div className="overflow-x-auto mt-5">
        <table className="w-full">
          <tr className="text-left">
            <th className="p-2 border border-gray-400">Name</th>
            <th className="p-2 border border-gray-400">Action</th>
          </tr>
          <tr>
            <td className="p-2 border border-gray-400">Breat cancer</td>
            <td className="p-2 border border-gray-400 space-x-5">
              <i className="fa-solid fa-edit cursor-pointer"></i>
              <i className="fa-solid fa-trash cursor-pointer"></i>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-400">Neurodegenerative</td>
            <td className="p-2 border border-gray-400 space-x-5">
              <i className="fa-solid fa-edit cursor-pointer"></i>
              <i className="fa-solid fa-trash cursor-pointer"></i>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-400">Lymphoma</td>
            <td className="p-2 border border-gray-400 space-x-5">
              <i className="fa-solid fa-edit cursor-pointer"></i>
              <i className="fa-solid fa-trash cursor-pointer"></i>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-400">Lung cancer</td>
            <td className="p-2 border border-gray-400 space-x-5">
              <i className="fa-solid fa-edit cursor-pointer"></i>
              <i className="fa-solid fa-trash cursor-pointer"></i>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-400">Lung cancer</td>
            <td className="p-2 border border-gray-400 space-x-5">
              <i className="fa-solid fa-edit cursor-pointer"></i>
              <i className="fa-solid fa-trash cursor-pointer"></i>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-400">Cardiometabolic</td>
            <td className="p-2 border border-gray-400 space-x-5">
              <i className="fa-solid fa-edit cursor-pointer"></i>
              <i className="fa-solid fa-trash cursor-pointer"></i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Clients;
