import React from "react";

const AddInfluencer = () => {
  return (
    <div>
      <div>
        <label>Campaign ID*</label>
        <input
          type="text"
          className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md"
          placeholder="Campaign ID"
        />
      </div>
      <div className="mt-10">
        <p className="bg-red-600 rounded-md cursor-pointer text-white text-center py-2">
          + Create
        </p>
      </div>
    </div>
  );
};

export default AddInfluencer;
