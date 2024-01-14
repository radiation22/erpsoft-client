import React, { useState } from "react";
import NoticeModal from "./NoticeModal";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";

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

const NoticeBoard = () => {
  const totalRows = 20;
  const rowsPerPageOptions = [5, 10, 15, 20];
  const defaultRowsPerPage = rowsPerPageOptions[0];
  const [showPositionModal, setShowPositionModal] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useContext(AuthContext);
  const queryKey = ["awards"];

  const { data: notices = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/notice`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    console.log(myBank);
    return myBank;
  });

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
          <p className="text-xl font-bold">Notice Board</p>
          <button
            onClick={handleAddPosition}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Add New Notice
          </button>
          <Link to="manageNotice">
            {" "}
            <button className="bg-amber-500 text-white px-4 py-2 rounded-md">
              Manage Notice
            </button>
          </Link>
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

      <table className="bg-white border-1 mt-8  w-full  border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="py-2 px-4">Serial No</th>
            <th className="py-2 px-4">Notice Type</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Notice Date</th>
            <th className="py-2 px-4">Notice By</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((row, idx) => (
            <tr
              key={row}
              className={
                idx % 2 === 0
                  ? "bg-white text-center"
                  : "bg-[#F4F3F8] text-center"
              }
            >
              <td className="border p-2">{idx + 1}</td>
              <td className="border p-2">{row?.name}</td>
              <td className="border p-2">{row?.country}</td>
              <td className="border p-2">{row?.noticeDate}</td>
              <td className="border p-2">{row?.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPositionModal && (
        <NoticeModal handleCloseCommentModal={handleCloseCommentModal} />
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

export default NoticeBoard;
