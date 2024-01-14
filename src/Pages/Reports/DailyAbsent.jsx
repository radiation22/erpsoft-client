import React, { useState } from "react";

const banks = ["Bank A", "Bank B", "Bank C"]; // Replace with your actual bank names

const DailyAbsent = () => {
  const [startDate, setStartDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedBank, setSelectedBank] = useState("");

  const handleFindButtonClick = () => {
    // Add your logic for handling the find button click here
    console.log("Start Date:", startDate);
    console.log("To Date:", toDate);
    console.log("Selected Bank:", selectedBank);
  };

  return (
    <div className="bg-white m-8 p-10 ">
      <p className="text-xl font-bold">Daily Absent</p>
      <form className="max-w-md">
        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-600"
          >
            Select Date
          </label>
          <input
            type="date"
            id="startDate"
            className="mt-1 p-2 border rounded-md w-full"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="bank"
            className="block text-sm font-medium text-gray-600"
          >
            Department
          </label>
          <select
            id="bank"
            className="mt-1 p-2 border rounded-md w-full"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            <option value="" disabled>
              Select Department
            </option>
            {banks.map((bank) => (
              <option key={bank} value={bank}>
                {bank}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          onClick={handleFindButtonClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default DailyAbsent;
