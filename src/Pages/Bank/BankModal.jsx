import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const BankModal = ({ handleCloseCommentModal, item }) => {
  console.log(item);
  const [accountName, setAccountName] = useState(item.accountName);
  const [accountNumber, setAccountNumber] = useState(item.accountNumber);
  const [bankName, setBankName] = useState(item.bankName); // Added
  const [branchName, setBranchName] = useState(item.branchName); // Added

  const { user } = useContext(AuthContext);

  const queryKey = ["departments"];

  const { data: departments = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/employees`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    return myBank;
  });

  const handleUpdate = (e) => {
    const reviews = {
      bankName: bankName,
      branchName: branchName,
      accountName: accountName,
      accountNumber: accountNumber,
    };

    const url = `https://erp-server-nine.vercel.app/updateBank/${item._id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Updated Successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay"></div>
      <div className="modal-container bg-[#ffffff] w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-xl font-bold">Award Form</p>
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
                Bank Name
              </label>
              <input
                type="text"
                id="position"
                defaultValue={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="awardDescription"
                className="block text-sm font-medium text-gray-600"
              >
                Account Name
              </label>
              <input
                type="text"
                id="awardDescription"
                defaultValue={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="awardItem"
                className="block text-sm font-medium text-gray-600"
              >
                Account Number
              </label>
              <input
                type="text"
                id="awardItem"
                defaultValue={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="awardBy"
                className="block text-sm font-medium text-gray-600"
              >
                Branch Name
              </label>
              <input
                type="text"
                id="awardBy"
                defaultValue={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={handleUpdate}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BankModal;
