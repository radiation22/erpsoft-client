import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const banks = ["Bank A", "Bank B", "Bank C"]; // Replace with your actual bank names

const employees = ["Employee 1", "Employee 2", "Employee 3"]; // Replace with your actual employee names

const leaveTypes = ["Casual Leave", "Sick Leave", "Vacation", "Other"]; // Replace with your actual leave types

const EmployeeOnLeave = () => {
  const [startDate, setStartDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedLeaveType, setSelectedLeaveType] = useState("");

  const handleFindButtonClick = () => {
    // Add your logic for handling the find button click here
    console.log("Start Date:", startDate);
    console.log("To Date:", toDate);
    console.log("Selected Bank:", selectedBank);
    console.log("Selected Employee:", selectedEmployee);
    console.log("Selected Month:", selectedMonth);
    console.log("Selected Year:", selectedYear);
    console.log("Selected Leave Type:", selectedLeaveType);
  };

  return (
    <div className="bg-white m-8 p-8">
      <p className="text-xl font-bold">Employee On Leave</p>
      <form className="max-w-md">
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

        <div className="mb-4">
          <label
            htmlFor="leaveType"
            className="block text-sm font-medium text-gray-600"
          >
            Select Leave Type
          </label>
          <select
            id="leaveType"
            className="mt-1 p-2 border rounded-md w-full"
            value={selectedLeaveType}
            onChange={(e) => setSelectedLeaveType(e.target.value)}
          >
            <option value="" disabled>
              Select Leave Type
            </option>
            {leaveTypes.map((leaveType) => (
              <option key={leaveType} value={leaveType}>
                {leaveType}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 w-full">
          <label
            htmlFor="startDate"
            className="block w-full text-sm font-medium text-gray-600"
          >
            From Date
          </label>
          <DatePicker
            id="startDate"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
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
          <DatePicker
            id="toDate"
            selected={toDate}
            onChange={(date) => setToDate(date)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <button
          type="button"
          className="bg-green-500 text-white p-2 rounded-md hover:bg-blue-600"
          onClick={handleFindButtonClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default EmployeeOnLeave;
