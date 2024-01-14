import React, { useContext, useState } from "react";

import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthProvider";

const ManageModal = ({ handleCloseCommentModal, item }) => {
  console.log(item);
  const [name, setName] = useState(item.name);
  const [email, setEmail] = useState(item.email);
  const [phoneNumber, setPhoneNumber] = useState(item.phoneNumber); // Added
  const [selectedPosition, setSelectedPosition] = useState(
    item.selectedPosition
  );
  const [selectedCity, setSelectedCity] = useState(item.selectedCity);

  const { user } = useContext(AuthContext);

  const queryKey = ["departments"];

  const { data: departments = [], refetch } = useQuery(queryKey, async () => {
    const url = `http://localhost:5000/employees`;
    const res = await fetch(url);
    const data = await res.json();
    const myBank = data.filter((d) => d.hrmEmail === user?.email);
    return myBank;
  });

  const handleUpdate = (e) => {
    const reviews = {
      name: name,
      selectedPosition: selectedPosition,
      selectedCity: selectedCity,
      phoneNumber: phoneNumber,
      email: email,
    };

    const url = `http://localhost:5000/updateEmployee/${item._id}`;

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
            <p className="text-xl font-bold">Manage Employee</p>
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
                Name
              </label>
              <input
                type="text"
                id="position"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="awardDescription"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                id="awardDescription"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="awardItem"
                className="block text-sm font-medium text-gray-600"
              >
                Position
              </label>
              <input
                type="text"
                id="awardItem"
                defaultValue={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="awardBy"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="awardBy"
                defaultValue={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="awardBy"
                className="block text-sm font-medium text-gray-600"
              >
                District
              </label>
              <input
                type="text"
                id="awardBy"
                defaultValue={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
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

export default ManageModal;
