import React from "react";

const AddInfluencer = () => {
  return (
    <div>
      <div className="space-y-3">
        <div className="bg-white p-5 shadow-sm rounded-md">
          <label>Campaign Name*</label>
          <input
            type="text"
            className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md"
            placeholder="Campaign name"
          />
        </div>
        <div className="flex gap-5 bg-white p-5 shadow-sm rounded-md">
          <div>
            <label>Product Name*</label>
            <input
              type="text"
              className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md"
              placeholder="Product name"
            />
          </div>
          <div>
            <label>Product Description*</label>
            <input
              type="text"
              className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md"
              placeholder="Product description"
            />
          </div>
        </div>
        <div className="bg-white p-5 shadow-sm rounded-md">
          <div className="flex gap-5 ">
            <div>
              <label>Number of influencers*</label>
              <input
                type="number"
                className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md"
                placeholder="Number of influencers"
              />
            </div>
            <div>
              <label>Location*</label>
              <select className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md">
                <option value="">US</option>
                <option value="">London</option>
                <option value="">Germany</option>
              </select>
            </div>
            <div>
              <label>Gender*</label>
              <select className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md">
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
          </div>
          <div>
            <label>Age Range*</label>
            <div class="flex item-center gap-5">
              <input
                type="number"
                className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md"
                placeholder="From"
              />
              <input
                type="number"
                className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md"
                placeholder="To"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <label>Disease Area*</label>
              <select className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md">
                <option value="">Breat cancer</option>
                <option value="">Neurodegenerative</option>
                <option value="">Lymphoma</option>
                <option value="">Lung cancer</option>
                <option value="">Cardiometabolic</option>
              </select>
            </div>
            <div>
              <label>Social Network*</label>
              <select className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md">
                <option value="">Instagram</option>
                <option value="">Youtube</option>
                <option value="">Tiktok</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 shadow-sm rounded-md">
          <div className="flex gap-5">
            <div>
              <label>Start Date*</label>
              <input
                type="date"
                className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md"
                placeholder="Social Network Name"
              />
            </div>
            <div>
              <label>End Date*</label>
              <input
                type="date"
                className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md"
                placeholder="Social Network Name"
              />
            </div>
            <div>
              <label>Budget*</label>
              <input
                type="number"
                className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md"
                placeholder="Budget"
              />
            </div>
          </div>
          <div>
            <label>More about target audiences</label>
            <textarea
              className="w-full bg-gray-100 p-2 focus:outline-0 rounded-md"
              placeholder="More about target audiences"
            />
          </div>
        </div>
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

// influ name,
