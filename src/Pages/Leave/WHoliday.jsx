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

const WHoliday = () => {
  const totalRows = 1;
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
    <div className="mx-8 bg-white p-10 mt-8">
      <div className="flex justify-between">
        <p className="text-xl font-bold">Weekly Holiday</p>
      </div>

      <table className="bg-white border-1 w-full border-gray-300 rounded-lg mt-8 overflow-hidden">
        <thead className="bg-[#E6E5ED] text-gray-700">
          <tr>
            <th className="py-2 px-4">Serial No</th>
            <th className="py-2 px-4">Weekly Leave Day</th>
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

              <td className="border p-2">Satarday,Sunday</td>
              <td className="border p-2">
                <button className="bg-amber-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full">
                  Edit
                </button>
              </td>
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
    </div>
  );
};

export default WHoliday;
