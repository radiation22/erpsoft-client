import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const LoanModal = ({ handleCloseCommentModal }) => {
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
      selectedEmployee,
      permittedBy,
      approveDate,
      repayment,
      details,
      amount,
      interest,
      installmentPeriod,
      totalRepayment,
      installment,
      status,

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

  const handleReset = () => {
    setPermittedBy("");
    setApproveDate("");
    setRepayment("");
    setDetails("");
    setAmount("");
    setSelectedEmployee("");
    setInterest("");
    setInstallmentPeriod("");
    setTotalRepayment("");
    setInstallment("");
    setStatus("");
  };

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
                htmlFor="department"
                className="block text-sm font-medium text-gray-600"
              >
                Employee Name
              </label>
              <select
                id="department"
                value={selectedEmployee}
                onChange={(e) => setSelectedEmployee(e.target.value)}
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
                htmlFor="position"
                className="block text-sm font-medium text-gray-600"
              >
                Permitted By
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
                Loan Details
              </label>
              <input
                type="text"
                id="awardDescription"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="awardItem"
                className="block text-sm font-medium text-gray-600"
              >
                Amount
              </label>
              <input
                type="text"
                id="awardItem"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="awardDate"
                className="block text-sm font-medium text-gray-600"
              >
                Approve Date
              </label>
              <input
                type="date"
                id="awardDate"
                value={approveDate}
                onChange={(e) => setApproveDate(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="awardDate"
                className="block text-sm font-medium text-gray-600"
              >
                Repayment From *
              </label>
              <input
                type="date"
                id="awardDate"
                value={repayment}
                onChange={(e) => setRepayment(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-gray-600"
              >
                Interest Percentage
              </label>
              <input
                type="number"
                id="interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="installmentPeriod"
                className="block text-sm font-medium text-gray-600"
              >
                Installment Period
              </label>
              <input
                type="number"
                id="installmentPeriod"
                value={installmentPeriod}
                onChange={(e) => setInstallmentPeriod(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="totalRepayment"
                className="block text-sm font-medium text-gray-600"
              >
                Total Repayment
              </label>
              <input
                type="number"
                id="totalRepayment"
                value={totalRepayment}
                onChange={(e) => setTotalRepayment(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="installment"
                className="block text-sm font-medium text-gray-600"
              >
                Installment
              </label>
              <input
                type="number"
                id="installment"
                value={installment}
                onChange={(e) => setInstallment(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-600"
              >
                Status
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              >
                <option value="">Select...</option>
                <option value="allow">Allow</option>
                <option value="deny">Deny</option>
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

export default LoanModal;
