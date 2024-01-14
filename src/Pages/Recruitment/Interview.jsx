import React, { useState } from "react";

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

const Interview = () => {
  const totalRows = 20;
  const rowsPerPageOptions = [5, 10, 15, 20];
  const defaultRowsPerPage = rowsPerPageOptions[0];

  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

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
    <div className="container mx-auto px-4 mt-8">
      <div className="flex justify-between">
        <p className="text-xl font-bold">Interview</p>
        <div className="gap-4 flex ">
          <button className="bg-rose-600 text-white px-4 py-2 rounded-md">
            Interview
          </button>
          <button className="bg-rose-600 text-white px-4 py-2 rounded-md">
            Manage Interview
          </button>
        </div>
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
            <th className="py-2 px-4">Candidate Id</th>
            <th className="py-2 px-4">Job Position</th>
            <th className="py-2 px-4">Shortlist Date</th>
            <th className="py-2 px-4">Interview Date</th>
            <th className="py-2 px-4">Viva Mark</th>
            <th className="py-2 px-4">Written Total Mark</th>
            <th className="py-2 px-4">MCQ Total Mark</th>
            <th className="py-2 px-4">Total Mark</th>
            <th className="py-2 px-4">Selection</th>
          </tr>
        </thead>
        <tbody>
          {displayedRows.map((row, idx) => (
            <tr key={row} className={row % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="border p-2">{idx + startIdx + 1}</td>
              <td className="border p-2">Chrismas Day</td>
              <td className="border p-2">2022-12-25</td>
              <td className="border p-2">2022-12-25</td>
              <td className="border p-2">1</td>
              <td className="border p-2">2022-06-22 </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalRows={totalRows}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Interview;
