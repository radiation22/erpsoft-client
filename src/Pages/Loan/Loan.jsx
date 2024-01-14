import React, { useContext, useState } from "react";
import LoanModal from "./LoanModal";
import { useQuery } from "@tanstack/react-query";
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

const Loan = () => {
  const totalRows = 20;
  const rowsPerPageOptions = [5, 10, 15, 20];
  const defaultRowsPerPage = rowsPerPageOptions[0];
  const [showPositionModal, setShowPositionModal] = useState(false);
  const { user } = useContext(AuthContext);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const queryKey = ["awards"];

  const { data: loans = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/loans`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
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
    <div className="bg-white m-8 p-10">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="text-xl font-bold">Grant Loan</p>
          <button
            onClick={handleAddPosition}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Add Loan
          </button>
          <Link to="manageLoan">
            {" "}
            <button className="bg-amber-500 text-white px-4 py-2 rounded-md">
              Manage Granted Loan
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

      <table className="bg-white border-1 mt-8 w-full border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-[#E6E5ED] text-gray-700">
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
          </tr>
        </thead>
        <tbody>
          {loans.map((row, idx) => (
            <tr
              key={row}
              className={
                idx % 2 === 0
                  ? "bg-white text-center"
                  : "bg-[#F4F3F8] text-center"
              }
            >
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
            </tr>
          ))}
        </tbody>
      </table>
      {showPositionModal && (
        <LoanModal handleCloseCommentModal={handleCloseCommentModal} />
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

export default Loan;
