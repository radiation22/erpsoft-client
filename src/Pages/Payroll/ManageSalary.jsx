import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SalaryModal from "./SalaryModal";

const ManageSalary = () => {
  const { user } = useContext(AuthContext);
  const queryKey = ["employees"];
  const [showPositionModal, setShowPositionModal] = useState(false);
  const handleCloseCommentModal = () => {
    setShowPositionModal(false);
  };
  // Use the useQuery hook to fetch data
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
    <div className="bg-white mx-8 mt-8 p-8">
      <div className="flex justify-between my-4">
        <p className="text-xl font-bold">Manage Payment List</p>
        {/* <div className="flex gap-4">
          <button
            onClick={handleAddPosition}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Add Salary
          </button>
          <button className="bg-black text-white px-4 py-2 rounded">
            Manage Salary
          </button>
        </div> */}
      </div>

      <table className="min-w-full border w-full border-gray-300">
        <thead className="bg-[#E6E5ED]">
          <tr>
            <th className="py-2 px-4 border-r">SL No</th>
            <th className="py-2 px-4 border-r">Employee Name</th>
            <th className="py-2 px-4 border-r">Position</th>
            <th className="py-2 px-4">Total Salary</th>
            <th className="py-2 px-4">Action</th>
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
              <td className="py-2 px-4">$ {employee.salary}</td>
              <td className="py-2 px-4">
                <button>Pay Slip</button>
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

export default ManageSalary;
