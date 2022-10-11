import React from "react";

const AddInfluencer = () => {
  return (
    <div>
      <input
        className="w-full h-10 bg-gray-100 rounded-md px-2 focus:outline-0"
        type="text"
        placeholder="Enter the disease name"
      />
      <div className="mt-10">
        <p className="bg-red-600 rounded-md cursor-pointer text-white text-center py-2">
          + Add
        </p>
      </div>
    </div>
  );
};

export default AddInfluencer;
