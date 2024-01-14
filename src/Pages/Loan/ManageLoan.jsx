import React, { useContext, useState } from "react";
import LoanModal from "./LoanModal";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import ManageLoanModal from "./ManageLoanModal";

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

const ManageLoan = () => {
  const totalRows = 20;
  const rowsPerPageOptions = [5, 10, 15, 20];
  const defaultRowsPerPage = rowsPerPageOptions[0];
  const [showPositionModal, setShowPositionModal] = useState(false);
  const { user } = useContext(AuthContext);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [item, setItem] = useState([]);
  const queryKey = ["awards"];

  const { data: loans = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/loans`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    return myBank;
  });

  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure want to delete?");
    if (agree) {
      fetch(`https://erp-server-nine.vercel.app/deleteLoan/${id}`, {
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

  const handleEdit = (item) => {
    setShowPositionModal(true);
    setItem(item);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
    <div className="container mx-auto px-4 mt-8">
      <div className="flex justify-between">
        <p className="text-xl font-bold">Manage Loan</p>
      </div>
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
      <table className="bg-white border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="py-2 px-4">Serial No</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Permitted By</th>
            <th className="py-2 px-4">Loan No</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Interest Percentage</th>
            <th className="py-2 px-4">Installment Period </th>
            <th className="py-2 px-4">Installment Cleared</th>
            <th className="py-2 px-4">Repayment Total </th>
            <th className="py-2 px-4">Approved Date</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((row, idx) => (
            <tr key={row} className={row % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="border p-2">{idx + 1}</td>
              <td className="border p-2">{row.selectedEmployee}</td>
              <td className="border p-2">{row.permittedBy}</td>
              <td className="border p-2">{idx + 1}</td>
              <td className="border p-2">{row.amount}</td>
              <td className="border p-2">{row.interest}%</td>
              <td className="border p-2">{row.installmentPeriod} month</td>
              <td className="border p-2"></td>
              <td className="border p-2">{row.totalRepayment}</td>
              <td className="border p-2">{row.approveDate}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(row)}
                  className="bg-green-500 px-4 py-1 rounded m-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(row._id)}
                  className="bg-amber-500 px-4 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPositionModal && (
        <ManageLoanModal
          item={item}
          handleCloseCommentModal={handleCloseCommentModal}
        />
      )}
      <Pagination
        totalRows={totalRows}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ManageLoan;
