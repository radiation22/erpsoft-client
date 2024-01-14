import React, { useState } from "react";

const ManageCandidate = () => {
  const [selectedTab, setSelectedTab] = useState("basic");

  const renderTabContent = () => {
    switch (selectedTab) {
      case "basic":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
            {/* Add your basic information details here */}
          </div>
        );
      case "experience":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Past Experience</h2>
            {/* Add your past experience details here */}
          </div>
        );
      case "education":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Educational Information
            </h2>
            {/* Add your educational information details here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" p-6 bg-white shadow-md rounded-md">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setSelectedTab("basic")}
          className={`px-4 py-2 ${
            selectedTab === "basic" ? "bg-blue-500 text-white" : "text-blue-500"
          } rounded-md hover:bg-blue-600 focus:outline-none`}
        >
          Basic Information
        </button>
        <button
          onClick={() => setSelectedTab("experience")}
          className={`px-4 py-2 ${
            selectedTab === "experience"
              ? "bg-blue-500 text-white"
              : "text-blue-500"
          } rounded-md hover:bg-blue-600 focus:outline-none`}
        >
          Past Experience
        </button>
        <button
          onClick={() => setSelectedTab("education")}
          className={`px-4 py-2 ${
            selectedTab === "education"
              ? "bg-blue-500 text-white"
              : "text-blue-500"
          } rounded-md hover:bg-blue-600 focus:outline-none`}
        >
          Educational Information
        </button>
      </div>

      {renderTabContent()}
    </div>
  );
};

export default ManageCandidate;
