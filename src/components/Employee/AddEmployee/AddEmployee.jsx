import React, { useContext, useState } from "react";
import { AuthContext } from "./../../../context/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    alternativePhoneNumber: "",
    selectedCity: "",
    selectedEmployee: "",
    selectedPosition: "",
    salary: "",
    releaseAmount: "",
    hrmEmail: user?.email,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://erp-server-nine.vercel.app/addEmployee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      toast.success("Employee Successfully Added!");
      // navigate("");
    } catch (error) {
      // Handle errors here
      console.error("Error while saving liked video:", error);
    }
  };

  return (
    <div className=" bg-white mx-8 p-10 mt-8">
      <h1 className="text-2xl font-bold mb-4">Employee Information Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border mt-1 rounded-full border-green-400 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border mt-1 rounded-full border-green-400 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="border mt-1 rounded-full border-green-400 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-600"
          >
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border mt-1 rounded-full border-green-400 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="alternativePhoneNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Alternative Phone Number:
          </label>
          <input
            type="tel"
            id="alternativePhoneNumber"
            name="alternativePhoneNumber"
            value={formData.alternativePhoneNumber}
            onChange={handleInputChange}
            className="border mt-1 rounded-full border-green-400 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="selectedCity"
            className="block text-sm font-medium text-gray-600"
          >
            Select City:
          </label>
          <select
            id="selectedCity"
            name="selectedCity"
            value={formData.selectedCity}
            onChange={handleInputChange}
            className="border mt-1 rounded-full border-green-400 p-2 w-full"
          >
            <option value="">Select City</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Khulna">Khulna</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Barisal">Barisal</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Cumilla">Cumilla</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="selectedEmployee"
            className="block text-sm font-medium text-gray-600"
          >
            Position:
          </label>
          <select
            id="selectedEmployee"
            name="selectedPosition"
            value={formData.selectedPosition}
            onChange={handleInputChange}
            className="border mt-1 rounded-full border-green-400 p-2 w-full"
          >
            <option value="">Employee Position</option>
            <option value="It Executive">It Executive</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Technical Researcher">Technical Researcher</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="salary"
            className="block text-sm font-medium text-gray-600"
          >
            Salary:
          </label>
          <input
            id="salary"
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            className="border mt-1 rounded-full border-green-400 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="selectedEmployee"
            className="block text-sm font-medium text-gray-600"
          >
            Select Employee:
          </label>
          <select
            id="selectedEmployee"
            name="selectedEmployee"
            value={formData.selectedEmployee}
            onChange={handleInputChange}
            className="border mt-1 rounded-full border-green-400 p-2 w-full"
          >
            <option value="">Employee Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contractual">Contractual</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button
          type="submit"
          className="bg-[#3AB648] text-white px-4 py-2 rounded"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
