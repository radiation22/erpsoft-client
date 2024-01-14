import React, { useState } from "react";

const banks = ["Bank A", "Bank B", "Bank C"]; // Replace with your actual bank names

const BankRecon = () => {
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
    <div className="container p-5 mt-8">
      <p className="text-xl font-bold">Bank Reconciliation</p>
      <form className="max-w-md">
        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-600"
          >
            Start Date
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
            htmlFor="toDate"
            className="block text-sm font-medium text-gray-600"
          >
            To Date
          </label>
          <input
            type="date"
            id="toDate"
            className="mt-1 p-2 border rounded-md w-full"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="bank"
            className="block text-sm font-medium text-gray-600"
          >
            Select Bank
          </label>
          <select
            id="bank"
            className="mt-1 p-2 border rounded-md w-full"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            <option value="" disabled>
              Select a bank
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
          Find
        </button>
      </form>
    </div>
  );
};

export default BankRecon;
