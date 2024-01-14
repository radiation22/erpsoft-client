import React from "react";
import { useState } from "react";
import AwardModal from "./AwardModal";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import ManageModal from "./ManageModal";

const ManageAward = () => {
  const { user } = useContext(AuthContext);

  const [showPositionModal, setShowPositionModal] = useState(false);
  const [item, setItem] = useState([]);
  const handleCloseCommentModal = () => {
    setShowPositionModal(false);
  };

  const handleEdit = (item) => {
    setShowPositionModal(true);
    setItem(item);
  };

  const queryKey = ["awards"];

  const { data: awards = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/awards`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    return myBank;
  });
  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure want to delete?");
    if (agree) {
      fetch(`https://erp-server-nine.vercel.app/deleteAward/${id}`, {
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

  return (
    <div className="bg-white mt-8 p-10 mx-8">
      <div className="flex justify-between my-4">
        <p className="text-xl font-bold">Manage Award</p>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-r">SL No</th>
            <th className="py-2 px-4 border-r">Award Name</th>
            <th className="py-2 px-4 border-r">Award Description</th>
            <th className="py-2 px-4">Gift Item</th>
            <th className="py-2 px-4">Date </th>
            <th className="py-2 px-4">Employee Name</th>
            <th className="py-2 px-4">Award By</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {awards.map((award, idx) => (
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-r">{idx + 1}</td>
              <td className="py-2 px-4 border-r">{award.name}</td>
              <td className="py-2 px-4 border-r">{award.awardDescription}</td>
              <td className="py-2 px-4">{award.awardItem}</td>
              <td className="py-2 px-4">{award.awardDate}</td>
              <td className="py-2 px-4">{award.department}</td>
              <td className="py-2 px-4">{award.awardBy}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleEdit(award)}
                  className="bg-green-500 px-4 py-1 rounded m-2"
                >
                  Edit
                </button>{" "}
                <button
                  onClick={() => handleDelete(award._id)}
                  className="bg-amber-500 px-4 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPositionModal && (
        <ManageModal
          item={item}
          handleCloseCommentModal={handleCloseCommentModal}
        />
      )}
    </div>
  );
};

export default ManageAward;
