import React, { useState } from "react";

const banks = ["Bank A", "Bank B", "Bank C"]; // Replace with your actual bank names
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const employees = ["Employee 1", "Employee 2", "Employee 3"]; // Replace with your actual employee names

const years = ["2022", "2023", "2024"]; // Replace with your actual years

const MonthlyPresent = () => {
  const [startDate, setStartDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleFindButtonClick = () => {
    // Add your logic for handling the find button click here
    console.log("Start Date:", startDate);
    console.log("To Date:", toDate);
    console.log("Selected Bank:", selectedBank);
    console.log("Selected Employee:", selectedEmployee);
    console.log("Selected Month:", selectedMonth);
    console.log("Selected Year:", selectedYear);
  };

  return (
    <div className="bg-white m-8 p-8">
      <p className="text-xl font-bold">Monthly Presents</p>
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
            className="mt-1 p-2 border border-green-500 rounded-md w-full"
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
            htmlFor="employee"
            className="block text-sm font-medium text-gray-600"
          >
            Employee Name
          </label>
          <select
            id="employee"
            className="mt-1 p-2 border border-green-500 rounded-md w-full"
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
          >
            <option value="" disabled>
              Select Employee
            </option>
            {employees.map((employee) => (
              <option key={employee} value={employee}>
                {employee}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="month"
            className="block text-sm font-medium text-gray-600"
          >
            Select Month
          </label>
          <select
            id="month"
            className="mt-1 p-2 border rounded-md w-full border-green-500"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="" disabled>
              Select Month
            </option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-600"
          >
            Select Year
          </label>
          <select
            id="year"
            className="mt-1 p-2 border border-green-500 rounded-md w-full"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="" disabled>
              Select Year
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
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

export default MonthlyPresent;
