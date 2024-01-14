import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

// ... (previous imports)

const LeaveAppModal = ({ handleCloseCommentModal }) => {
  const { user } = useContext(AuthContext);

  const [employeeName, setEmployeeName] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [applyDay, setApplyDay] = useState("");
  const [approveDay, setApproveDay] = useState("");
  const [approveStartDate, setApproveStartDate] = useState("");
  const [approvedBy, setApprovedBy] = useState("");
  const [reason, setReason] = useState("");

  const queryKey = ["departments"];

  const { data: departments = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/employees`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    return myBank;
  });

  const handleAdd = async () => {
    const leaveApplicationData = {
      employeeName,
      leaveType,
      startDate,
      endDate,
      applyDay,
      approveDay,
      approveStartDate,
      approvedBy,
      reason,
      hrmEmail: user?.email,
    };

    try {
      await fetch("https://erp-server-nine.vercel.app/addLeaveApplication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leaveApplicationData),
      });
      toast.success("Leave Application Successfully Submitted!");
    } catch (error) {
      console.error("Error while submitting leave application:", error);
      // Handle errors here
      toast.error("Failed to submit leave application");
    }
  };

  const handleReset = () => {
    setEmployeeName("");
    setLeaveType("");
    setStartDate("");
    setEndDate("");
    setApplyDay("");
    setApproveDay("");
    setApproveStartDate("");
    setApprovedBy("");
    setReason("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay"></div>
      <div className="modal-container bg-[#ffffff] w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
        <div className="modal-content max-h-screen overflow-y-auto py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-xl font-bold">Leave Application</p>
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
                htmlFor="department"
                className="block text-sm font-medium text-gray-600"
              >
                Select Employee
              </label>
              <select
                id="department"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
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
            <div className="mb-4">
              <label
                htmlFor="leaveType"
                className="block text-sm font-medium text-gray-700"
              >
                Leave Type
              </label>
              <input
                type="text"
                id="leaveType"
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700"
              >
                Application Start Date
              </label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700"
              >
                Application End Date
              </label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="approveStartDate"
                className="block text-sm font-medium text-gray-700"
              >
                Approved Day Start Date
              </label>
              <input
                type="date"
                id="approveStartDate"
                value={approveStartDate}
                onChange={(e) => setApproveStartDate(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="leaveType"
                className="block text-sm font-medium text-gray-700"
              >
                Apply Day
              </label>
              <input
                type="text"
                id="leaveType"
                value={applyDay}
                onChange={(e) => setApplyDay(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="leaveType"
                className="block text-sm font-medium text-gray-700"
              >
                Approve Day
              </label>
              <input
                type="text"
                id="leaveType"
                value={approveDay}
                onChange={(e) => setApproveDay(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="leaveType"
                className="block text-sm font-medium text-gray-700"
              >
                Reason
              </label>
              <input
                type="text"
                id="leaveType"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="leaveType"
                className="block text-sm font-medium text-gray-700"
              >
                Approve By
              </label>
              <input
                type="text"
                id="leaveType"
                value={approvedBy}
                onChange={(e) => setApprovedBy(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
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
                Submit Leave Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveAppModal;
