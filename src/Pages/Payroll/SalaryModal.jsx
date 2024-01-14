import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const SalaryModal = ({ handleCloseCommentModal }) => {
  const [position, setPosition] = useState("");
  const [awardDescription, setAwardDescription] = useState(""); // Added
  const [awardItem, setAwardItem] = useState(""); // Added
  const [awardDate, setAwardDate] = useState(""); // Added
  const [awardBy, setAwardBy] = useState(""); // Added
  const { user } = useContext(AuthContext);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const queryKey = ["departments"];

  const { data: departments = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/employees`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    return myBank;
  });

  const handleAdd = async () => {
    const departmentData = {
      name: position,
      department: selectedDepartment,
    };

    try {
      await fetch("https://erp-server-nine.vercel.app/addSalary", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(departmentData),
      });
      toast.success("Salary Successfully Added!");
    } catch (error) {
      // Handle errors here
      console.error("Error while saving liked video:", error);
    }
  };

  const handleReset = () => {
    setPosition("");

    setSelectedDepartment("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay"></div>
      <div className="modal-container bg-[#ffffff] w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-xl font-bold">Add Employee salary</p>
            <button
              onClick={handleCloseCommentModal}
              className="modal-close-button rounded-full cursor-pointer z-50 bg-red-400 px-3 py-1 text-white"
            >
              X
            </button>
          </div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-600"
              >
                Amount
              </label>
              <input
                type="text"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-600"
              >
                Select Employee
              </label>
              <select
                id="department"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              >
                <option value="">Select...</option>
                {departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={handleAdd}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SalaryModal;
