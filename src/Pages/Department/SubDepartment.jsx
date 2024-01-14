import React from "react";
import DepartmentModal from "./DepartmentModal";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

const SubDepartment = () => {
  const [showPositionModal, setShowPositionModal] = useState(false);

  const { user } = useContext(AuthContext);
  const queryKey = ["departments"];

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

  const handleAddPosition = () => {
    setShowPositionModal(true);
  };
  return (
    <div className="p-10 m-8 bg-white">
      <div className="">
        <p>Sub Department</p>
      </div>

      <table className="min-w-full mt-5 w-full  border border-gray-300">
        <thead className="bg-[#E6E5ED]">
          <tr>
            <th className="py-2 px-4 border-r">SL No</th>
            <th className="py-2 px-4 border-r">Sub Department Name</th>
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
              <td className="py-2 px-4 border-r">{department?.department}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPositionModal && (
        <DepartmentModal handleCloseCommentModal={handleCloseCommentModal} />
      )}
    </div>
  );
};

export default SubDepartment;
