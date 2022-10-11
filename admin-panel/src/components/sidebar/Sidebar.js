import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import Account from "./Account";
import ArrowDown from "../../assets/images/ArrowDown.svg";
import ArrowUp from "../../assets/images/ArrowUp.svg";
import AccountImg from "../../assets/images/clients/client5.jpg";

const Sidebar = ({ children }) => {
  const [submenu, setSubmenu] = useState({
    name: "",
    isOpen: false,
  });

  const menuHandler = (menuName) => {
    setSubmenu({
      name: menuName,
      isOpen: !submenu.isOpen,
    });
  };

  return (
    <div>
      <div className="flex">
        <div className="w-full sm:w-72 bg-white h-screen shadow-r-md">
          <p className="py-8 border-b border-gray-100"></p>
          <div>
            <Link
              to="/"
              className="hover:bg-gray-100 p-3 cursor-pointer font-medium text-gray-700 gap-3 flex items-center"
            >
              <i className="fa-solid fa-house"></i>
              <p>Dashboard</p>
            </Link>
            <Link
              to="/campaigns"
              className="hover:bg-gray-100 p-3 cursor-pointer font-medium text-gray-700 gap-3 flex items-center"
            >
              <i className="fa-solid fa-bullhorn"></i>
              <p>Campaigns</p>
            </Link>
            <Link
              to="/disease"
              className="hover:bg-gray-100 p-3 cursor-pointer font-medium text-gray-700 gap-3 flex items-center"
            >
              <i className="fa-solid fa-disease"></i>
              <p>Disease</p>
            </Link>
            <div className="px-3">
              <div
                className="hover:bg-gray-100 py-3 cursor-pointer font-medium text-gray-700 flex gap-3 items-center"
                onClick={() => menuHandler("influencer")}
              >
             <i className="fa-solid fa-video"></i>
                <p>Influencers</p>
                {submenu.isOpen && submenu.name === "influencer" ? (
                  <img src={ArrowUp} alt="" />
                ) : (
                  <img src={ArrowDown} alt="" />
                )}
              </div>
              {submenu.isOpen && submenu.name === "influencer" && (
                <div>
                  <Link
                    to="/influencers"
                    className="hover:bg-gray-100 p-3 cursor-pointer font-medium text-gray-700 space-x-3 flex items-center"
                  >
                    <i className="fa-solid fa-users"></i>
                    <p>Influencers</p>
                  </Link>
                  <Link
                    to="/listinvitedinfluencers"
                    className="hover:bg-gray-100 p-3 cursor-pointer font-medium text-gray-700 space-x-3 flex items-center"
                  >
                    <i className="fa-solid fa-list"></i>
                    <p>List</p>
                  </Link>
                </div>
              )}
            </div>
            <div className="px-3">
              <div
                className="hover:bg-gray-100 py-3 cursor-pointer font-medium text-gray-700 flex gap-3 items-center"
                onClick={() => menuHandler("clients")}
              >
                <i className="fa-solid fa-users"></i>
                <p>Clients</p>
                {submenu.isOpen && submenu.name === "clients" ? (
                  <img src={ArrowUp} alt="" />
                ) : (
                  <img src={ArrowDown} alt="" />
                )}
              </div>
              {submenu.isOpen && submenu.name === "clients" && (
                <div>
                  <Link
                    to="/clients"
                    className="hover:bg-gray-100 p-3 cursor-pointer font-medium text-gray-700 space-x-3 flex items-center"
                  >
                    <i className="fa-solid fa-users"></i>
                    <p>Clients</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-gray-200 w-full">
          <div className="bg-white shadow-md">
            <div className="w-11/12 m-auto flex justify-between items-center py-3">
              <p className="text-xl">Logo</p>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button>
                    <img
                      src={AccountImg}
                      alt=""
                      className="w-10 rounded-full"
                    />
                  </Menu.Button>
                </div>
                <Account />
              </Menu>
            </div>
          </div>
          <div className="w-11/12 m-auto my-10 overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
