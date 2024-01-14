import React, { useState } from "react";
import HolidayModal from "./HolidayModal";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

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

const Holiday = () => {
  const { user } = useContext(AuthContext);
  const totalRows = 20;
  const rowsPerPageOptions = [5, 10, 15, 20];
  const defaultRowsPerPage = rowsPerPageOptions[0];
  const [showPositionModal, setShowPositionModal] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const queryKey = ["holidays"];

  const { data: holidays = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/holidays`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    const myEmployee = data.filter((d) => d.hrmEmail === user?.email);

    return myEmployee;
  });

  const handleAddPosition = () => {
    setShowPositionModal(true);
  };
  const handleCloseCommentModal = () => {
    setShowPositionModal(false);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
    <div className="bg-white p-8 m-8">
      <div className="mx-auto px-4 m-4">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <p className="text-xl font-bold">Holiday</p>
            <button
              onClick={handleAddPosition}
              className="bg-[#3AB648] text-white px-4 py-2 rounded-md"
            >
              Add More Holiday
            </button>
            <button className="bg-[#EF901D] text-white px-4 py-2 rounded-md">
              Manage Holiday
            </button>
          </div>
          <div className="gap-4 flex">
            <div className="flex items-center">
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
        </div>

        <table className="bg-white border-1 border-gray-300 rounded-lg w-full overflow-hidden mt-10">
          <thead className="bg-gray-200 border text-gray-700 w-full">
            <tr>
              <th className="py-2 px-4">Serial No</th>
              <th className="py-2 px-4">Holiday Name</th>
              <th className="py-2 px-4">From</th>
              <th className="py-2 px-4">To</th>
              <th className="py-2 px-4">Number of Days</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((row, idx) => (
              <tr
                key={row}
                className={idx % 2 === 0 ? "bg-white" : "bg-[#F4F3F8]"}
              >
                <td className="border p-2 text-center">{idx + 1}</td>
                <td className="border p-2 text-center">{row.name}</td>
                <td className="border p-2 text-center">{row.fromDate}</td>
                <td className="border p-2 text-center">{row.toDate}</td>
                <td className="border p-2 text-center">{row.numberWeekend}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {showPositionModal && (
          <HolidayModal handleCloseCommentModal={handleCloseCommentModal} />
        )}
        <div className="flex justify-end mt-10">
          <Pagination
            totalRows={totalRows}
            rowsPerPage={rowsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Holiday;
