import React, { useState } from "react";
import PositionModal from "./PositionModal";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

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

const Position = () => {
  const totalRows = 2;
  const rowsPerPageOptions = [5, 10, 15, 20];
  const defaultRowsPerPage = rowsPerPageOptions[0];
  const [showPositionModal, setShowPositionModal] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useContext(AuthContext);
  const queryKey = ["employees"];
  const { data: employees = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/employees`;
    const res = await fetch(url);
    const data = await res.json();
    const myEmployee = data.filter((d) => d.hrmEmail == user?.email);

    return myEmployee;
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleCloseCommentModal = () => {
    setShowPositionModal(false);
  };

  const handleAddPosition = () => {
    setShowPositionModal(true);
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
    <div className=" bg-white m-8 px-4 p-10">
      <div className="flex justify-between">
        <p className="text-xl font-bold">Position</p>
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

      <table className="bg-white w-full border-1 border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-[#E6E5ED] text-gray-700">
          <tr className="">
            <th className="py-2 px-4">Serial No</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((row, idx) => (
            <tr
              key={row}
              className={idx % 2 === 0 ? "bg-white" : "bg-[#F4F3F8]"}
            >
              <td className="border p-2 text-center">{idx + 1}</td>
              <td className="border p-2 text-center">{row.name}</td>
              <td className="border p-2 text-center">{row.selectedPosition}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-8">
        <Pagination
          totalRows={totalRows}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      {showPositionModal && (
        <PositionModal handleCloseCommentModal={handleCloseCommentModal} />
      )}
    </div>
  );
};

export default Position;
