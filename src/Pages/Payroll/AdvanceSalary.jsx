import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import SalaryModal from "./SalaryModal";

const AdvanceSalary = () => {
  const [showPositionModal, setShowPositionModal] = useState(false);
  const handleCloseCommentModal = () => {
    setShowPositionModal(false);
  };
  const { user } = useContext(AuthContext);
  const queryKey = ["employees"];
  const { data: employees = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/employees`;
    const res = await fetch(url);
    const data = await res.json();
    const myEmployee = data.filter((d) => d.hrmEmail == user?.email);

    return myEmployee;
  });
  const handleAddPosition = () => {
    setShowPositionModal(true);
  };
  return (
    <div className="bg-white mx-8 mt-8 p-10">
      <div className="flex justify-between my-4">
        <p className="text-xl font-bold">Salary Advance</p>
        <div className="flex gap-4">
          <button
            onClick={handleAddPosition}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Salary Advance
          </button>
          <button className="bg-amber-500 text-white px-4 py-2 rounded">
            Manage Salary Advance
          </button>
        </div>
      </div>

      <table className="min-w-full w-full border-1 border-gray-500">
        <thead className="bg-[#E6E5ED]">
          <tr>
            <th className="py-2 px-4 border-r">SL No</th>
            <th className="py-2 px-4 border-r">Employee Name</th>
            <th className="py-2 px-4 border-r">Position</th>
            <th className="py-2 px-4 border-r">Salary</th>
            <th className="py-2 px-4">Release Amount</th>
            <th className="py-2 px-4">Due</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, idx) => (
            <tr
              className={
                idx % 2 === 0
                  ? "bg-white text-center"
                  : "bg-[#F4F3F8] text-center"
              }
            >
              <td className="py-2 px-4 border-r">{idx + 1}</td>
              <td className="py-2 px-4 border-r">{employee.name}</td>
              <td className="py-2 px-4 border-r">
                {employee.selectedPosition}
              </td>
              <td className="py-2 px-4">${employee.salary}</td>
              <td className="py-2 px-4">${employee.releaseAmount}</td>
              <td className="py-2 px-4">
                {employee.salary - employee.releaseAmount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPositionModal && (
        <SalaryModal handleCloseCommentModal={handleCloseCommentModal} />
      )}
    </div>
  );
};

export default AdvanceSalary;
