import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const NoticeModal = ({ handleCloseCommentModal }) => {
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [noticeDate, setNoticeDate] = useState("");
  const { user } = useContext(AuthContext);

  const handleAdd = async () => {
    const departmentData = {
      name: position,
      country,
      noticeDate,
      company,
      hrmEmail: user?.email,
    };

    try {
      await fetch("https://erp-server-nine.vercel.app/addNotice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(departmentData),
      });
      toast.success("Notice Successfully Added!");
    } catch (error) {
      console.error("Error while adding award:", error);
    }
  };

  const handleReset = () => {
    setPosition("");
    setAddress("");
    setClientEmail(""), setCompany(""), setCountry("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay"></div>
      <div className="modal-container bg-[#ffffff] w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-xl font-bold">Notice Form</p>
            <button
              onClick={handleCloseCommentModal}
              className="modal-close-button rounded-full cursor-pointer z-50 bg-red-400 px-3 py-1 text-white"
            >
              X
            </button>
          </div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-600"
              >
                Notice Type
              </label>
              <input
                type="text"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="awardDescription"
                className="block text-sm font-medium text-gray-600"
              >
                Description
              </label>
              <input
                type="text"
                id="awardDescription"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="awardDate"
                className="block text-sm font-medium text-gray-600"
              >
                Notice Date
              </label>
              <input
                type="date"
                id="awardDate"
                value={noticeDate}
                onChange={(e) => setNoticeDate(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="awardBy"
                className="block text-sm font-medium text-gray-600"
              >
                Notice By
              </label>
              <input
                type="text"
                id="awardBy"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={handleAdd}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;
