// BankForm.js

import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const AddBank = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    bankName: "",
    accountNumber: "",
    accountName: "",
    branchName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    // Handle save logic here
    console.log("Form data saved:", formData);
    const details = {
      accountName: formData.accountName,
      accountNumber: formData.accountNumber,
      bankName: formData.bankName,
      branchName: formData.branchName,
      hrmEmail: user?.email,
    };

    try {
      await fetch("https://erp-server-nine.vercel.app/addBank", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      toast.success("Bank Successfully Added!");
    } catch (error) {
      // Handle errors here
      console.error("Error while saving liked video:", error);
    }
  };

  const handleReset = () => {
    setFormData({
      bankName: "",
      accountNumber: "",
      accountName: "",
      branchName: "",
    });
  };

  return (
    <div className="w-[90%] mx-auto mt-8 p-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Bank Form</h2>
      <form className="w-full">
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bankName"
          >
            Bank Name
          </label>
          <input
            type="text"
            id="bankName"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4 ">
          <label
            className=" text-gray-700 text-sm font-bold mb-2"
            htmlFor="accountNumber"
          >
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="accountName"
          >
            Account Name
          </label>
          <input
            type="text"
            id="accountName"
            name="accountName"
            value={formData.accountName}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="branchName"
          >
            Branch Name
          </label>
          <input
            type="text"
            id="branchName"
            name="branchName"
            value={formData.branchName}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="flex gap-5">
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBank;
