import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const LeaveModal = ({ handleCloseCommentModal }) => {
  const [permittedBy, setPermittedBy] = useState(""); // Added
  const [approveDate, setApproveDate] = useState(""); // Added
  const [repayment, setRepayment] = useState(""); // Added
  const [details, setDetails] = useState(""); // Added
  const [amount, setAmount] = useState(""); // Added
  const { user } = useContext(AuthContext);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const queryKey = ["departments"];
  const [interest, setInterest] = useState(""); // Added
  const [installmentPeriod, setInstallmentPeriod] = useState(""); // Added
  const [totalRepayment, setTotalRepayment] = useState(""); // Added
  const [installment, setInstallment] = useState(""); // Added
  const [status, setStatus] = useState(""); // Added
  const { data: departments = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/employees`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    return myBank;
  });

  const handleAdd = async () => {
    const departmentData = {
      hrmEmail: user?.email,
    };

    try {
      await fetch("https://erp-server-nine.vercel.app/addLoan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(departmentData),
      });
      toast.success("Loan Successfully Added!");
    } catch (error) {
      // Handle errors here
      console.error("Error while saving liked video:", error);
    }
  };

  const handleReset = () => {};

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay"></div>
      <div className="modal-container bg-[#ffffff] w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 max-h-full overflow-y-auto">
        <div className="modal-content overflow-y-auto py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-xl font-bold">Grant Loan</p>
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
                Leave Type
              </label>
              <input
                type="text"
                id="position"
                value={permittedBy}
                onChange={(e) => setPermittedBy(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="awardDescription"
                className="block text-sm font-medium text-gray-600"
              >
                Number of Leave Days
              </label>
              <input
                type="number"
                id="awardDescription"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
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
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveModal;
