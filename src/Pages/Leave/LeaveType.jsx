import React, { useState } from "react";
import LeaveModal from "./LeaveModal";

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

const LeaveType = () => {
  const totalRows = 20;
  const rowsPerPageOptions = [5, 10, 15, 20];
  const defaultRowsPerPage = rowsPerPageOptions[0];
  const [showPositionModal, setShowPositionModal] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddPosition = () => {
    setShowPositionModal(true);
  };
  const handleCloseCommentModal = () => {
    setShowPositionModal(false);
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
    <div className="bg-white mx-8 p-10 mt-8">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="text-xl font-bold">Leave Type</p>
          <button
            onClick={handleAddPosition}
            className="bg-rose-600 text-white px-4 py-1 rounded-md"
          >
            Add Leave Type
          </button>
        </div>
        <div className="gap-4 flex ">
          <div className=" flex items-center">
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

      <table className="bg-white border-1 my-8 w-full border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-[#E6E5ED] text-gray-700">
          <tr>
            <th className="py-2 px-4">ID </th>
            <th className="py-2 px-4">Type Name</th>
            <th className="py-2 px-4">Total Leave days</th>

            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {displayedRows.map((row, idx) => (
            <tr
              key={row}
              className={
                idx % 2 === 0
                  ? "bg-white text-center"
                  : "bg-[#F4F3F8] text-center"
              }
            >
              <td className="border p-2">{idx + startIdx + 1}</td>
              <td className="border p-2">Sick Leave</td>
              <td className="border p-2">2</td>

              <td className="border p-2">
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPositionModal && (
        <LeaveModal handleCloseCommentModal={handleCloseCommentModal} />
      )}
      <div className="flex justify-end mt-8">
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

export default LeaveType;
