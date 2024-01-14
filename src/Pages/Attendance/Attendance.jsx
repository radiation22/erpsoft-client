import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const EmployeeTable = () => {
  const { user } = useContext(AuthContext);
  const [statusMap, setStatusMap] = useState({});
  const queryKey = ["employees"];

  const { data: employeesData = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/employees`;
    const res = await fetch(url);
    const data = await res.json();
    const myEmployee = data.filter((d) => d.hrmEmail === user?.email);

    // Initialize statusMap with default values
    const initialStatusMap = {};
    myEmployee.forEach((employee) => {
      initialStatusMap[employee._id] = employee.status;
    });

    setStatusMap(initialStatusMap);

    return myEmployee;
  });

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handleStatusChange = async (id, name) => {
    const newStatusMap = { ...statusMap, [id]: !statusMap[id] };
    if (newStatusMap[id] == false) {
      return;
    }

    try {
      const url = `https://erp-server-nine.vercel.app/attendance`;
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name,
          date: getCurrentDate(),
          status: newStatusMap[id],
          hrmEmail: user?.email,
        }),
      });

      // Update the local statusMap
      setStatusMap(newStatusMap);
    } catch (error) {
      console.error("Error updating employee status:", error);
    }
  };

  return (
    <div className="p-10 bg-white m-8 ">
      <table className="table-auto border-1 border-collapse w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Employee Name</th>
            <th className="border p-2">Absent</th>
            <th className="border p-2">Today's Date</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((employee, idx) => (
            <tr
              className={
                idx % 2 === 0
                  ? "bg-white text-center"
                  : "bg-[#F4F3F8] text-center"
              }
              key={employee._id}
            >
              <td className="border p-2">{employee.name}</td>
              <td className="border p-2">
                <input
                  type="checkbox"
                  checked={statusMap[employee._id]}
                  onChange={() =>
                    handleStatusChange(employee._id, employee.name)
                  }
                />
              </td>
              <td className="border p-2">{getCurrentDate()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
