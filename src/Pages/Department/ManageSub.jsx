import React from "react";
import DepartmentModal from "./DepartmentModal";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import SubModal from "./SubModal";
import ManageSubModal from "./ManageSubModal";

const ManageSub = () => {
  const { user } = useContext(AuthContext);
  const queryKey = ["departments"];
  const [showPositionModal, setShowPositionModal] = useState(false);
  const [item, setItem] = useState([]);
  const { data: departments = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/subDepartments`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    return myBank;
  });

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
      fetch(`https://erp-server-nine.vercel.app/deleteSubDept/${id}`, {
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
    <div className="container mx-auto mt-8 px-5">
      <div className="flex justify-between my-4">
        <p>Manage Department</p>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-r">SL No</th>
            <th className="py-2 px-4 border-r">Sub Department Name</th>
            <th className="py-2 px-4 border-r">Department Name</th>
            <th className="py-2 px-4 border-r">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {departments.map((department, idx) => (
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-r">{idx + 1}</td>
              <td className="py-2 px-4 border-r">{department?.name}</td>
              <td className="py-2 px-4 border-r">{department?.department}</td>
              <td className="py-2 px-4 border-r">
                <button
                  onClick={() => handleEdit(department)}
                  className="bg-green-500 px-4 py-1 text-white mr-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(department._id)}
                  className="bg-amber-500 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPositionModal && (
        <ManageSubModal
          item={item}
          handleCloseCommentModal={handleCloseCommentModal}
        />
      )}
    </div>
  );
};

export default ManageSub;
