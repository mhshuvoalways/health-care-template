import React from "react";
import { Link } from "react-router-dom";
import InfluencersImg from "../../assets/images/clients/client5.jpg";

const AccoutDetails = () => {
  return (
    <div className="w-4/5 max-w-lg m-auto">
      <form>
        <div className="mb-10 flex justify-center">
          <div>
            <label>
              <img
                src={InfluencersImg}
                alt=""
                className="md:h-32 md:w-32 h-32 w-32 rounded-full border-4 border-gray-400 cursor-pointer"
              />
              <input type="file" className="hidden" />
            </label>
            <p className="border mt-4 border-gray-400"></p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 opacity-70"
              type="email"
              placeholder="emaiva@gmail.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Phone
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 opacity-70"
              type="phone"
              placeholder="phone"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="md:flex md:items-center">
            <button className="shadow hover:bg-gray-800 bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              Save Changes
            </button>
          </div>
          <div className="md:flex md:items-center">
            <Link to="/changepassword">
              <button
                className="shadow hover:bg-gray-800 bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Changes Password
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccoutDetails;
