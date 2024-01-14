import React, { useState } from "react";
import NoticeModal from "./NoticeModal";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import ManageModal from "./ManageModal";

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

const ManageNotice = () => {
  const totalRows = 20;
  const rowsPerPageOptions = [5, 10, 15, 20];
  const defaultRowsPerPage = rowsPerPageOptions[0];
  const [showPositionModal, setShowPositionModal] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useContext(AuthContext);
  const queryKey = ["awards"];
  const [item, setItem] = useState([]);
  const { data: notices = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/notice`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    console.log(myBank);
    return myBank;
  });

  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure want to delete?");
    if (agree) {
      fetch(`https://erp-server-nine.vercel.app/deleteNotice/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            refetch();
          }
        });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEdit = (item) => {
    setShowPositionModal(true);
    setItem(item);
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
    <div className="mx-8 bg-white p-10 mt-8">
      <div className="flex justify-between">
        <p className="text-xl font-bold">Manage Notice Board</p>
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

      <table className="bg-white border-1 w-full border-gray-300 rounded-lg mt-8 overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="py-2 px-4">Serial No</th>
            <th className="py-2 px-4">Notice Type</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Notice Date</th>
            <th className="py-2 px-4">Notice By</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((row, idx) => (
            <tr
              key={row}
              className={
                row % 2 === 0
                  ? "bg-gray-200 text-center"
                  : "bg-white text-center"
              }
            >
              <td className="border p-2">{idx + 1}</td>
              <td className="border p-2">{row.name}</td>
              <td className="border p-2">{row.country}</td>
              <td className="border p-2">{row.noticeDate}</td>
              <td className="border p-2">{row.company}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(row)}
                  className="px-4 py-1 bg-green-500 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(row._id)}
                  className="px-4 py-1 bg-amber-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPositionModal && (
        <NoticeModal handleCloseCommentModal={handleCloseCommentModal} />
      )}
      <div className="mt-8 flex justify-end">
        <Pagination
          totalRows={totalRows}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      {showPositionModal && (
        <ManageModal
          item={item}
          handleCloseCommentModal={handleCloseCommentModal}
        />
      )}
    </div>
  );
};

export default ManageNotice;
