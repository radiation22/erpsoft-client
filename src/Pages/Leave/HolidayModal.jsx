import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const HolidayModal = ({ handleCloseCommentModal }) => {
  const [position, setPosition] = useState("");
  const [details, setDetails] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [numWeekends, setNumWeekends] = useState("");
  const { user } = useContext(AuthContext);
  const handleAdd = async () => {
    const holidayData = {
      name: position,
      fromDate: fromDate,
      toDate: toDate,
      numberWeekend: numWeekends,
      hrmEmail: user?.email,
    };

    try {
      await fetch("https://erp-server-nine.vercel.app/addHoliday", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(holidayData),
      });
      toast.success("Holiday Successfully Added!");
    } catch (error) {
      // Handle errors here
      console.error("Error while saving liked video:", error);
    }
  };

  const handleReset = () => {
    setPosition("");
    setDetails("");
    setFromDate("");
    setToDate("");
    setNumWeekends("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay"></div>
      <div className="modal-container bg-[#ffffff] w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-xl font-bold">Add Holiday</p>
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
                Holiday Name
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
                htmlFor="fromDate"
                className="block text-sm font-medium text-gray-600"
              >
                From Date
              </label>
              <input
                type="date"
                id="fromDate"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="toDate"
                className="block text-sm font-medium text-gray-600"
              >
                To Date
              </label>
              <input
                type="date"
                id="toDate"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="numWeekends"
                className="block text-sm font-medium text-gray-600"
              >
                Number of Weekends
              </label>
              <input
                type="number"
                id="numWeekends"
                value={numWeekends}
                onChange={(e) => setNumWeekends(e.target.value)}
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
                Add Holiday
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HolidayModal;
