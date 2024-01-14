import React from "react";
import DepartmentModal from "./DepartmentModal";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import SubModal from "./SubModal";
import { Link } from "react-router-dom";

const Department = () => {
  const [showPositionModal, setShowPositionModal] = useState(false);
  const [showSubModal, setShowSubModal] = useState(false);

  const { user } = useContext(AuthContext);
  const queryKey = ["departments"];

  const { data: departments = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/departments`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    return myBank;
  });

  const handleCloseCommentModal = () => {
    setShowPositionModal(false);
    setShowSubModal(false);
  };

  const handleAddPosition = () => {
    setShowPositionModal(true);
  };
  const addSubDepartment = () => {
    setShowSubModal(true);
  };
  return (
    <div className="bg-white m-8 p-10">
      <div className="flex justify-between my-4">
        <p>Department</p>
        <button
          onClick={handleAddPosition}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add New Department
        </button>
        <Link to="manageDepartment">
          <button className="bg-amber-500 text-white px-4 py-2 rounded">
            Manage Department
          </button>
        </Link>
        <button
          onClick={addSubDepartment}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Sub Department
        </button>
        <Link to="manageSub">
          {" "}
          <button className="bg-amber-500 text-white px-4 py-2 rounded">
            Manage Sub Department
          </button>
        </Link>
      </div>

      <table className="min-w-full border-1 w-full mt-8 border-gray-300">
        <thead className="bg-[#E6E5ED]">
          <tr>
            <th className="py-2 px-4 border-r">SL No</th>
            <th className="py-2 px-4 border-r">Department Name</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {departments.map((department, idx) => (
            <tr
              className={
                idx % 2 === 0
                  ? "bg-white text-center"
                  : "bg-[#F4F3F8] text-center"
              }
            >
              <td className="py-2 px-4 border-r">{idx + 1}</td>
              <td className="py-2 px-4 border-r">{department?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPositionModal && (
        <DepartmentModal handleCloseCommentModal={handleCloseCommentModal} />
      )}
      {showSubModal && (
        <SubModal handleCloseCommentModal={handleCloseCommentModal} />
      )}
    </div>
  );
};

export default Department;
