import React from "react";

const AddInfluencer = () => {
  return (
    <div>
      <div className="flex gap-5 pb-12">
        <select className="h-10 px-5 bg-gray-100 rounded-md focus:outline-0">
          <option value="">Instagram</option>
          <option value="">Tiktok</option>
          <option value="">Youtube</option>
        </select>
        <input
          className="w-full h-10 bg-gray-100 rounded-md px-2 focus:outline-0"
          type="text"
          placeholder="Paste url"
        />
      </div>
      <div className="mt-10">
        <p className="bg-red-600 rounded-md cursor-pointer text-white text-center py-2">
          + Add
        </p>
      </div>
    </div>
  );
};

export default AddInfluencer;
