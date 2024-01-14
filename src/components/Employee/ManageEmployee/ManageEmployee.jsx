import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import ManageModal from "../Modal/ManageModal";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

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

const ManageEmployee = () => {
  const [showPositionModal, setShowPositionModal] = useState(false);
  const [item, setItem] = useState([]);
  const { user } = useContext(AuthContext);
  const totalRows = 20;
  const rowsPerPageOptions = [5, 10, 15, 20];
  const defaultRowsPerPage = rowsPerPageOptions[0];

  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const queryKey = ["employees"];

  // Use the useQuery hook to fetch data
  const { data: employees = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/employees`;
    const res = await fetch(url);
    const data = await res.json();
    const myEmployee = data.filter((d) => d.hrmEmail == user?.email);

    return myEmployee;
  });

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

  const handleCloseCommentModal = () => {
    setShowPositionModal(false);
  };

  const handleEdit = (item) => {
    setShowPositionModal(true);
    setItem(item);
  };

  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure want to delete?");
    if (agree) {
      fetch(`https://erp-server-nine.vercel.app/deleteEmployee/${id}`, {
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

  return (
    <div className="m-8 p-10 bg-white">
      <div className="flex justify-between">
        <p className="text-xl font-bold">Manage Employee</p>
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
          <tr>
            <th className="py-2 px-4">Serial No</th>

            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Position</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Phone No</th>
            <th className="py-2 px-4">District</th>
            <th className="py-2 px-4">Update</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((row, idx) => (
            <tr
              key={row}
              className={idx % 2 === 0 ? "bg-white" : "bg-[#F4F3F8]"}
            >
              <td className="border p-2 text-center">{idx + 1}</td>

              <td className="border p-2 text-center">{row?.name}</td>
              <td className="border p-2 text-center">Manager</td>
              <td className="border p-2 text-center">{row?.email}</td>
              <td className="border p-2 text-center">{row?.phoneNumber}</td>
              <td className="border p-2 text-center">{row?.selectedCity}</td>
              <td className="border flex gap-4 p-2 text-center">
                <FaRegEdit
                  className="text-xl text-amber-600 cursor-pointer"
                  onClick={() => handleEdit(row)}
                />
                <FaTrashAlt
                  className="text-xl text-green-600 cursor-pointer"
                  onClick={() => handleDelete(row._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPositionModal && (
        <ManageModal
          item={item}
          handleCloseCommentModal={handleCloseCommentModal}
        />
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

export default ManageEmployee;
