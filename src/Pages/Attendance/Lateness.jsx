import React, { useState } from "react";

const Lateness = () => {
  const [formData, setFormData] = useState({
    employeeName: "",
    selectedMonth: "",
    selectedYear: "",
    selectedDate: "",
    inTime: "",
    outTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Lateness & Early Closing</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="employeeName"
            className="block text-sm font-medium text-gray-600"
          >
            Select Employee:
          </label>
          <select
            id="employeeName"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleInputChange}
            className="border p-2 w-full"
          >
            <option value="">Select Employee</option>
            {/* Add your employee options here */}
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
            className="border p-2 w-full"
          >
            <option value="">Select Month</option>
            {/* Add your month options here */}
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
            className="border p-2 w-full"
          >
            <option value="">Select Year</option>
            {/* Add your year options here */}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Lateness;
