import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import BankModal from "./BankModal";
import { useState } from "react";

const BankList = () => {
  const { user } = useContext(AuthContext);
  const queryKey = ["bankList"];
  const [showPositionModal, setShowPositionModal] = useState(false);
  const [item, setItem] = useState([]);
  const { data: bankLists = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/bank`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    return myBank;
  });

  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure want to delete?");
    if (agree) {
      fetch(`https://erp-server-nine.vercel.app/deleteBank/${id}`, {
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

  const handleCloseCommentModal = () => {
    setShowPositionModal(false);
  };

  const handleEdit = (item) => {
    setShowPositionModal(true);
    setItem(item);
  };

  return (
    <div className="bg-white m-8 p-8">
      <div className="flex justify-between my-4">
        <p className="text-xl font-bold">Bank List</p>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-[#E6E5ED]">
          <tr>
            <th className="py-2 px-4 border-r">SL No</th>
            <th className="py-2 px-4 border-r">Bank Name</th>
            <th className="py-2 px-4 border-r">Account Name</th>
            <th className="py-2 px-4">Account Number</th>
            <th className="py-2 px-4">Branch Name </th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {bankLists.map((bank, idx) => (
            <tr
              className={
                idx % 2 === 0
                  ? "bg-white text-center"
                  : "bg-[#F4F3F8] text-center"
              }
            >
              <td className="py-2 px-4 border-r">{idx + 1}</td>
              <td className="py-2 px-4 border-r">{bank?.bankName}</td>
              <td className="py-2 px-4 border-r">{bank?.accountName}</td>
              <td className="py-2 px-4">{bank?.accountNumber}</td>
              <td className="py-2 px-4">{bank?.branchName}</td>

              <td className="py-2 px-4">
                <button
                  onClick={() => handleEdit(bank)}
                  className="bg-green-500 text-white rounded px-4 py-1 mr-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(bank._id)}
                  className="bg-yellow-500 text-white rounded px-4 py-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPositionModal && (
        <BankModal
          item={item}
          handleCloseCommentModal={handleCloseCommentModal}
        />
      )}
    </div>
  );
};

export default BankList;
