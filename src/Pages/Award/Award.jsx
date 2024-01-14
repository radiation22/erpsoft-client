import React from "react";
import { useState } from "react";
import AwardModal from "./AwardModal";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Award = () => {
  const { user } = useContext(AuthContext);
  const [showPositionModal, setShowPositionModal] = useState(false);
  const handleCloseCommentModal = () => {
    setShowPositionModal(false);
  };

  const queryKey = ["awards"];

  const { data: awards = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/awards`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    return myBank;
  });

  const handleAddPosition = () => {
    setShowPositionModal(true);
  };
  return (
    <div className=" mt-8 p-10 mx-8 bg-white">
      <div className="flex justify-between my-4">
        <p className="text-xl font-bold">Award</p>
        <div className="flex gap-4">
          <button
            onClick={handleAddPosition}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add New Award
          </button>
          <Link to="manageAward">
            <button className="bg-amber-500 text-white px-4 py-2 rounded">
              Manage Award
            </button>
          </Link>
        </div>
      </div>

      <table className="min-w-full w-full border border-gray-300">
        <thead className="bg-[#E6E5ED]">
          <tr>
            <th className="py-2 px-4 border-r">SL No</th>
            <th className="py-2 px-4 border-r">Award Name</th>
            <th className="py-2 px-4 border-r">Award Description</th>
            <th className="py-2 px-4">Gift Item</th>
            <th className="py-2 px-4">Date </th>
            <th className="py-2 px-4">Employee Name</th>
            <th className="py-2 px-4">Award By</th>
          </tr>
        </thead>
        <tbody>
          {awards.map((award, idx) => (
            <tr
              className={
                idx % 2 === 0
                  ? "bg-white text-center"
                  : "bg-[#F4F3F8] text-center"
              }
            >
              <td className="py-2 px-4 border-r">{idx + 1}</td>
              <td className="py-2 px-4 border-r">{award.name}</td>
              <td className="py-2 px-4 border-r">{award.awardDescription}</td>
              <td className="py-2 px-4">{award.awardItem}</td>
              <td className="py-2 px-4">{award.awardDate}</td>
              <td className="py-2 px-4">{award.department}</td>
              <td className="py-2 px-4">{award.awardBy}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPositionModal && (
        <AwardModal handleCloseCommentModal={handleCloseCommentModal} />
      )}
    </div>
  );
};

export default Award;
