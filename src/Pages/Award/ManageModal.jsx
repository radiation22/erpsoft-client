import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const ManageModal = ({ handleCloseCommentModal, item }) => {
  console.log(item);
  const [position, setPosition] = useState(item.name);
  const [awardDescription, setAwardDescription] = useState(
    item.awardDescription
  ); // Added
  const [awardItem, setAwardItem] = useState(item.awardItem); // Added
  const [awardDate, setAwardDate] = useState(item.awardDate); // Added
  const [awardBy, setAwardBy] = useState(item.awardBy); // Added
  const { user } = useContext(AuthContext);
  const [selectedDepartment, setSelectedDepartment] = useState(
    item.selectedDepartment
  );
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
      name: position,
      awardDescription: awardDescription,
      awardDate: awardDate,
      awardItem: awardItem,
      awardBy: awardBy,
      department: selectedDepartment,
    };

    const url = `https://erp-server-nine.vercel.app/manageAward/${item._id}`;

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
                Award Name
              </label>
              <input
                type="text"
                id="position"
                defaultValue={item.name}
                onChange={(e) => setPosition(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="awardDescription"
                className="block text-sm font-medium text-gray-600"
              >
                Award Description
              </label>
              <input
                type="text"
                id="awardDescription"
                defaultValue={item.awardDescription}
                onChange={(e) => setAwardDescription(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="awardItem"
                className="block text-sm font-medium text-gray-600"
              >
                Award Item
              </label>
              <input
                type="text"
                id="awardItem"
                defaultValue={item.awardItem}
                onChange={(e) => setAwardItem(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="awardDate"
                className="block text-sm font-medium text-gray-600"
              >
                Award Date
              </label>
              <input
                type="date"
                id="awardDate"
                defaultValue={item.awardDate}
                onChange={(e) => setAwardDate(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="awardBy"
                className="block text-sm font-medium text-gray-600"
              >
                Award By
              </label>
              <input
                type="text"
                id="awardBy"
                defaultValue={item.awardBy}
                onChange={(e) => setAwardBy(e.target.value)}
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
                defaultValue={item.selectedDepartment}
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
