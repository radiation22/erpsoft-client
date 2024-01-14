import React, { useState } from "react";
import {
  FaArtstation,
  FaBox,
  FaComment,
  FaFlickr,
  FaHockeyPuck,
  FaIndent,
  FaListAlt,
  FaTh,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./startdash.css";
const StartDash = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen dash-board">
      <div className="md:flex md:w-64  bg-[#1E0C34] ps-4 md:h-screen">
        <div className={`md:w-64 ${isOpen ? "block" : "hidden"} md:block`}>
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M14.293 5.293a1 1 0 00-1.414-1.414L10 8.586 6.121 4.707a1 1 0 00-1.414 1.414L8.586 10l-3.889 3.879a1 1 0 101.414 1.414L10 11.414l3.879 3.889a1 1 0 001.414-1.414L11.414 10l3.889-3.889z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
          <div className="py-2 space-y-10">
            {/* Your navigation links or items go here */}
            <div className="flex items-center gap-4">
              <FaUsers className="text-white"></FaUsers>
              <Link
                to="/hrm"
                className="block py-2 px-4 text-white hover:bg-gray-300"
              >
                Human Resources
              </Link>
            </div>
            {/* <div className="flex items-center gap-4">
              <FaListAlt className="text-white"></FaListAlt>
              <Link
                to="/analytics"
                className="block py-2 px-4 text-white hover:bg-gray-300"
              >
                Analytics & Reporting
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaTh className="text-white"></FaTh>
              <Link
                to=""
                className="block py-2 px-4 text-white hover:bg-gray-300"
              >
                CRM and Sales
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaArtstation className="text-white"></FaArtstation>
              <Link
                to=""
                className="block py-2 px-4 text-white hover:bg-gray-300"
              >
                Accounts
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaIndent className="text-white"></FaIndent>
              <Link
                to=""
                className="block py-2 px-4 text-white hover:bg-gray-300"
              >
                Purchasing
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaHockeyPuck className="text-white"></FaHockeyPuck>
              <Link
                to=""
                className="block py-2 px-4 text-white hover:bg-gray-300"
              >
                Manufacturing
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaBox className="text-white"></FaBox>
              <Link
                to=""
                className="block py-2 px-4 text-white hover:bg-gray-300"
              >
                Job Costing
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaFlickr className="text-white"></FaFlickr>
              <Link
                to=""
                className="block py-2 px-4 text-white hover:bg-gray-300"
              >
                Inventory Management
              </Link>
            </div> */}
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleDrawer}
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M14.293 5.293a1 1 0 00-1.414-1.414L10 8.586 6.121 4.707a1 1 0 00-1.414 1.414L8.586 10l-3.889 3.879a1 1 0 101.414 1.414L10 11.414l3.879 3.889a1 1 0 001.414-1.414L11.414 10l3.889-3.889z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartDash;
