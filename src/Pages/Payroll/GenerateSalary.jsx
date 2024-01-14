import React, { useState } from "react";

const SalaryForm = () => {
  const [salaryDate, setSalaryDate] = useState("");

  const handleGenerate = () => {
    // Implement logic to generate based on selected salary date
    console.log(`Generating salary for ${salaryDate}`);
  };

  const handleReset = () => {
    // Implement logic to reset the form
    setSalaryDate("");
  };

  return (
    <div className="p-8 bg-white shadow-md rounded-md mx-8">
      <h2 className="text-2xl font-semibold mb-4">Salary Form</h2>

      <form>
        {/* Input for selecting salary date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Select Salary Date
          </label>
          <input
            type="date"
            className="mt-1 p-2 w-full border rounded-md"
            value={salaryDate}
            onChange={(e) => setSalaryDate(e.target.value)}
          />
        </div>

        {/* Generate and Reset buttons */}
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleGenerate}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Generate
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </form>
      <div className="mt-10">
        <table className="min-w-full w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-r">SL No</th>
              <th className="py-2 px-4 border-r">Employee Name</th>
              <th className="py-2 px-4 border-r">Amount</th>
              <th className="py-2 px-4">Release Amount</th>
              <th className="py-2 px-4">Salary Month </th>
              <th className="py-2 px-4">Create Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 text-center">
              <td className="py-2 px-4 border-r">1</td>
              <td className="py-2 px-4 border-r">Alice Oseman </td>
              <td className="py-2 px-4 border-r">$ 1000</td>
              <td className="py-2 px-4">$ 1000</td>
              <td className="py-2 px-4">June 2022 </td>
              <td className="py-2 px-4">2022-06-19 </td>
            </tr>
            {/* <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-r">1</td>
            <td className="py-2 px-4 border-r">DV-7 </td>
            <td className="py-2 px-4 border-r">19-06-2022 </td>
            <td className="py-2 px-4">Employeer 1% ICF Expense </td>
            <td className="py-2 px-4">June 2022 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4"> $ 30.00 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4">ABC Bank </td>
            <td className="py-2 px-4">
              <button>Action</button>{" "}
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-r">1</td>
            <td className="py-2 px-4 border-r">DV-7 </td>
            <td className="py-2 px-4 border-r">19-06-2022 </td>
            <td className="py-2 px-4">Employeer 1% ICF Expense </td>
            <td className="py-2 px-4">June 2022 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4"> $ 30.00 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4">ABC Bank </td>
            <td className="py-2 px-4">
              <button>Action</button>{" "}
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-r">1</td>
            <td className="py-2 px-4 border-r">DV-7 </td>
            <td className="py-2 px-4 border-r">19-06-2022 </td>
            <td className="py-2 px-4">Employeer 1% ICF Expense </td>
            <td className="py-2 px-4">June 2022 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4"> $ 30.00 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4">ABC Bank </td>
            <td className="py-2 px-4">
              <button>Action</button>{" "}
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-r">1</td>
            <td className="py-2 px-4 border-r">DV-7 </td>
            <td className="py-2 px-4 border-r">19-06-2022 </td>
            <td className="py-2 px-4">Employeer 1% ICF Expense </td>
            <td className="py-2 px-4">June 2022 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4"> $ 30.00 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4">ABC Bank </td>
            <td className="py-2 px-4">
              <button>Action</button>{" "}
            </td>
          </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryForm;
