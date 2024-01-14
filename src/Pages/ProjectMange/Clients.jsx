import React from "react";
import { useState } from "react";
import ClientModal from "./ClientModal";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Clients = () => {
  const { user } = useContext(AuthContext);
  const [showPositionModal, setShowPositionModal] = useState(false);
  const handleAddPosition = () => {
    setShowPositionModal(true);
  };
  const handleCloseCommentModal = () => {
    setShowPositionModal(false);
  };

  const queryKey = ["awards"];

  const { data: clients = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/client`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    return myBank;
  });

  return (
    <div className="bg-white m-8 mt-8 p-8">
      <div className="flex justify-between my-4">
        <p className="text-xl font-bold">Clients</p>
        <div className="flex gap-4">
          <button
            onClick={handleAddPosition}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add New Client
          </button>
          <button className="bg-amber-500 text-white px-4 py-2 rounded">
            Manage Clients
          </button>
        </div>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-r">SL No</th>
            <th className="py-2 px-4 border-r">Client Name</th>
            <th className="py-2 px-4 border-r">Company</th>
            <th className="py-2 px-4">Email Address</th>
            <th className="py-2 px-4">Country </th>
            <th className="py-2 px-4">Address</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, idx) => (
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-r">{idx + 1}</td>
              <td className="py-2 px-4 border-r">{client.name} </td>
              <td className="py-2 px-4 border-r">{client.company}</td>
              <td className="py-2 px-4">{client.clientEmail}</td>
              <td className="py-2 px-4">{client.country}</td>
              <td className="py-2 px-4">{client.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPositionModal && (
        <ClientModal handleCloseCommentModal={handleCloseCommentModal} />
      )}
    </div>
  );
};

export default Clients;
