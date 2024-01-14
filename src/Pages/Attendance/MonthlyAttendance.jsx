import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MonthlyAttendance = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    employeeName: "",
    selectedMonth: "",
    selectedYear: "",
    selectedDate: "",
    inTime: "",
    outTime: "",
  });

  const queryKey = ["employees"];

  // Use the useQuery hook to fetch data
  const { data: employees = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/employees`;
    const res = await fetch(url);
    const data = await res.json();
    const myEmployee = data.filter((d) => d.hrmEmail == user?.email);

    return myEmployee;
  });

  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace this URL with the actual URL of your backend endpoint
      const response = await fetch(
        `https://erp-server-nine.vercel.app/attendance`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(employeeName);
      const filterData = data.filter(
        (d) =>
          d.name === formData.employeeName ||
          d.date === formData.selectedMonth ||
          d.date === formData.selectedYear
      );
      setFilteredData(filterData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to generate an array of month options
  const generateMonthOptions = () => {
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

    return months.map((month, index) => (
      <option key={index} value={index + 1}>
        {month}
      </option>
    ));
  };

  // Function to generate an array of year options from 2021 to 2030
  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, index) => currentYear + index);

    return years.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };

  return (
    <div className="p-10 w-full bg-white m-8">
      <h1 className="text-xl font-bold mb-4">Monthly Attendance</h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-4 w-full">
          <label
            htmlFor="employeeName"
            className=" text-sm font-medium text-gray-600"
          >
            Select Employee:
          </label>

          <select
            id="employeeName"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleInputChange}
            className="border p-2 w-full border-green-500 rounded-full"
          >
            <option value="">Select Employee</option>
            {employees.map((em) => (
              <option value={em.name}>{em.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="selectedMonth"
            className="block text-sm font-medium text-gray-600"
          >
            Select Month:
          </label>
          <select
            id="selectedMonth"
            name="selectedMonth"
            value={formData.selectedMonth}
            onChange={handleInputChange}
            className="border p-2 w-full border-green-500 rounded-full"
          >
            <option value="">Select Month</option>
            {generateMonthOptions()}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="selectedYear"
            className="block text-sm font-medium text-gray-600"
          >
            Select Year:
          </label>
          <select
            id="selectedYear"
            name="selectedYear"
            value={formData.selectedYear}
            onChange={handleInputChange}
            className="border p-2 w-full border-green-500 rounded-full"
          >
            <option value="">Select Year</option>
            {generateYearOptions()}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="inTime"
            className="block text-sm font-medium text-gray-600"
          >
            In Time:
          </label>
          <input
            type="time"
            id="inTime"
            name="inTime"
            value={formData.inTime}
            onChange={handleInputChange}
            className="border p-2 w-full border-green-500 rounded-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="outTime"
            className="block text-sm font-medium text-gray-600"
          >
            Out Time:
          </label>
          <input
            type="time"
            id="outTime"
            name="outTime"
            value={formData.outTime}
            onChange={handleInputChange}
            className="border p-2 w-full border-green-500 rounded-full"
          />
        </div>
        <button
          type="submit"
          className="bg-amber-500 text-white px-4 py-2 rounded"
        >
          Details
        </button>
      </form>

      {/* Display the table with filtered data */}
      {filteredData.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">Filtered Data</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Serial Number</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Date</th>
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, idx) => (
                <tr key={row._id}>
                  <td className="py-2 px-4 border-b">{idx + 1}</td>
                  <td className="py-2 px-4 border-b">{row.name}</td>
                  <td className="py-2 px-4 border-b">{row.date}</td>
                  {/* Add more table cells as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MonthlyAttendance;
