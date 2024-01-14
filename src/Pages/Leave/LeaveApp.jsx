import React, { useState } from "react";
import LeaveAppModal from "./LeaveAppModal";
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

const LeaveApp = () => {
  const totalRows = 20;
  const rowsPerPageOptions = [5, 10, 15, 20];
  const defaultRowsPerPage = rowsPerPageOptions[0];
  const [showPositionModal, setShowPositionModal] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const queryKey = ["departments"];
  const { user } = useContext(AuthContext);
  const { data: leaves = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/leave`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    return myBank;
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
    <div className="bg-white mx-8 p-10 mt-8">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="text-xl font-bold">Leave Application</p>
          <button
            onClick={handleAddPosition}
            className="bg-rose-600 text-white px-4 py-2 rounded-md"
          >
            Leave Application
          </button>
          <button className="bg-rose-600 text-white px-4 py-2 rounded-md">
            Manage Application
          </button>
        </div>
        <div className="gap-4 flex ">
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

      <table className="bg-white border-1 w-full mt-10 border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="py-2 px-4">Serial No</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Leave Type</th>
            <th className="py-2 px-4">Application Start Date</th>
            <th className="py-2 px-4">Application End Date</th>
            <th className="py-2 px-4">Approve Start Date</th>

            <th className="py-2 px-4">Apply Day</th>
            <th className="py-2 px-4">Approve Day</th>
            <th className="py-2 px-4">Reason</th>
            <th className="py-2 px-4">Approve By</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((row, idx) => (
            <tr
              key={row}
              className={
                idx % 2 === 0
                  ? "bg-white text-center"
                  : "bg-[#F4F3F8] text-center"
              }
            >
              <td className="border p-2">{idx + 1}</td>
              <td className="border p-2">{row.employeeName}</td>
              <td className="border p-2">{row.leaveType}</td>
              <td className="border p-2">{row.startDate}</td>
              <td className="border p-2">{row.endDate}</td>
              <td className="border p-2">{row.approveStartDate}</td>

              <td className="border p-2">{row.applyDay} </td>
              <td className="border p-2">{row.approveDay}</td>
              <td className="border p-2">{row.reason}</td>
              <td className="border p-2">{row.approvedBy}</td>
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
        <LeaveAppModal handleCloseCommentModal={handleCloseCommentModal} />
      )}
    </div>
  );
};

export default LeaveApp;
