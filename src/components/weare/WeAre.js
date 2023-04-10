import React from "react";
import { Link } from "react-router-dom";
import Weare from "../../assets/images/weare.webp";

const WeAre = () => {
  return (
    <div className="bg-red-600 py-20 mb-20">
      <div className="w-10/12 m-auto">
        <div className="flex flex-wrap md:flex-nowrap gap-10 items-center">
          <div className="w-full md:w-6/12 space-y-5 text-gray-100">
            <p className="text-lg tracking-widest">OUR STORY</p>
            <p className="text-2xl tracking-wider">Origins of Kaiku Health</p>
            <p className="tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              convallis gravida condimentum. In tincidunt vitae lectus nec
              ullamcorper. Aenean vel congue libero. In malesuada diam in nunc
              egestas lobortis. Vestibulum dapibus enim ut consectetur
              elementum. Mauris in diam eget metus elementum feugiat vel lacinia
              libero. Cras nec massa venenatis, pulvinar nibh sit amet, posuere
              ligula. Suspendisse potenti. Suspendisse ut commodo nisi. Morbi
              sed risus pellentesque, lacinia dui ac, dictum lacus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nulla erat augue,
              efficitur sed mattis ut, ullamcorper vel nulla. Fusce et massa
              tincidunt, mollis quam ut, venenatis ante. Nullam imperdiet tempor
              condimentum. Nullam bibendum mattis sodales. Morbi eget mi lacinia
              arcu condimentum pharetra sed id ante. Duis consequat augue
              eleifend pulvinar mollis.
            </p>
          </div>
          <div className="w-full md:w-6/12">
            <img src={Weare} alt="" />
          </div>
        </div>
        <Link to="/signup">
          <p className="bg-gray-900 hover:bg-red-600 text-gray-100 py-3 border border-gray-900 px-10 rounded-full text-center mt-10 w-full sm:w-3/12">
            Sign Up
          </p>
        </Link>
      </div>
    </div>
  );
};

export default WeAre;
