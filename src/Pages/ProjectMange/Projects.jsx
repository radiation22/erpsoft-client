import React from "react";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

const Projects = () => {
  const [showPositionModal, setShowPositionModal] = useState(false);
  const handleAddPosition = () => {
    setShowPositionModal(true);
  };
  const handleCloseCommentModal = () => {
    setShowPositionModal(false);
  };
  return (
    <div className="bg-white mx-8 p-10 mt-8 ">
      <div className="flex justify-between my-4">
        <p className="text-xl font-bold">Projects</p>
        <div className="flex gap-4">
          <button
            onClick={handleAddPosition}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add New Project
          </button>
          <button className="bg-amber-500 text-white px-4 py-2 rounded">
            Manage Projects
          </button>
        </div>
      </div>

      <table className="min-w-full w-full mt-8 border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-r">SL No</th>
            <th className="py-2 px-4 border-r">Project Name</th>
            <th className="py-2 px-4 border-r">Client Name</th>
            <th className="py-2 px-4">Project Lead</th>
            <th className="py-2 px-4">Approximate Tasks</th>
            <th className="py-2 px-4">Start Date</th>
            <th className="py-2 px-4">End Date</th>
            <th className="py-2 px-4">Project Duration </th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100 text-center">
            <td className="py-2 px-4 border-r">1</td>
            <td className="py-2 px-4 border-r">Alice Oseman </td>
            <td className="py-2 px-4 border-r"></td>
            <td className="py-2 px-4"></td>
            <td className="py-2 px-4">Bangladesh</td>
            <td className="py-2 px-4">2022-06-19 </td>
          </tr>
          {/* <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-r">1</td>
            <td className="py-2 px-4 border-r">DV-7 </td>
            <td className="py-2 px-4 border-r">19-06-2022 </td>
            <td className="py-2 px-4">Employeer 1% ICF Expense </td>
            <td className="py-2 px-4">June 2022 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4"> $ 30.00 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4">ABC Bank </td>
            <td className="py-2 px-4">
              <button>Action</button>{" "}
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-r">1</td>
            <td className="py-2 px-4 border-r">DV-7 </td>
            <td className="py-2 px-4 border-r">19-06-2022 </td>
            <td className="py-2 px-4">Employeer 1% ICF Expense </td>
            <td className="py-2 px-4">June 2022 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4"> $ 30.00 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4">ABC Bank </td>
            <td className="py-2 px-4">
              <button>Action</button>{" "}
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-r">1</td>
            <td className="py-2 px-4 border-r">DV-7 </td>
            <td className="py-2 px-4 border-r">19-06-2022 </td>
            <td className="py-2 px-4">Employeer 1% ICF Expense </td>
            <td className="py-2 px-4">June 2022 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4"> $ 30.00 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4">ABC Bank </td>
            <td className="py-2 px-4">
              <button>Action</button>{" "}
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-r">1</td>
            <td className="py-2 px-4 border-r">DV-7 </td>
            <td className="py-2 px-4 border-r">19-06-2022 </td>
            <td className="py-2 px-4">Employeer 1% ICF Expense </td>
            <td className="py-2 px-4">June 2022 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4"> $ 30.00 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4">ABC Bank </td>
            <td className="py-2 px-4">
              <button>Action</button>{" "}
            </td>
          </tr> */}
        </tbody>
      </table>
      {showPositionModal && (
        <ProjectModal handleCloseCommentModal={handleCloseCommentModal} />
      )}
    </div>
  );
};

export default Projects;
