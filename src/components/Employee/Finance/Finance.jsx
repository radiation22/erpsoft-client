import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const Pagination = ({ totalRows, rowsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-left items-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 mr-2"
      >
        Previous
      </button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-300 ml-2"
      >
        Next
      </button>
    </div>
  );
};

const ManageEmployee = () => {
  const { user } = useContext(AuthContext);
  const totalRows = 20;
  const rowsPerPageOptions = [5, 10, 15, 20];
  const defaultRowsPerPage = rowsPerPageOptions[0];

  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const queryKey = ["employees"];

  // Use the useQuery hook to fetch data
  const { data: employees = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/employees`;
    const res = await fetch(url);
    const data = await res.json();
    const myEmployee = data.filter((d) => d.hrmEmail == user?.email);

    return myEmployee;
  });

  const handleRowsPerPageChange = (event) => {
    const selectedRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(selectedRowsPerPage);
    setCurrentPage(1); // Reset to the first page when changing rows per page
  };

  const startIdx = (currentPage - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;

  const displayedRows = Array.from(
    { length: totalRows },
    (_, rowIndex) => rowIndex + 1
  ).slice(startIdx, endIdx);

  return (
    <div className="bg-white p-10 mx-8 mt-8">
      <div className="flex justify-between">
        <p className="text-xl font-bold">Employee Performance</p>

        <div className="mb-4 flex items-center">
          <label className="mr-2">Show Rows:</label>
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="border p-2"
          >
            {rowsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table className="bg-white border-1 w-full border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-[#E6E5ED] text-gray-700">
          <tr>
            <th className="py-2 px-4">Serial No</th>

            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Position</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Phone No</th>
            <th className="py-2 px-4">Attendance</th>
            <th className="py-2 px-4">Score</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((row, idx) => (
            <tr
              key={row}
              className={
                idx % 2 === 0
                  ? "bg-white text-center"
                  : "bg-[#F4F3F8] text-center"
              }
            >
              <td className="border p-2 text-center">{idx + startIdx + 1}</td>

              <td className="border p-2">{row?.name}</td>
              <td className="border p-2">Manager</td>
              <td className="border p-2">{row?.email}</td>
              <td className="border p-2">{row?.phoneNumber}</td>
              <td className="border p-2">{row?.selectedCity}</td>
              <td className="border p-2">70</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex mt-8 justify-end">
        <Pagination
          totalRows={totalRows}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ManageEmployee;
