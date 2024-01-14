import React, { useEffect, useState } from "react";
import HrmChart from "./HrmChart";
import HrmBar from "./HrmBar";
import HrmComposed from "./HrmComposed";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { format } from "date-fns";
import "./Maindash.css";
import {
  FaSignOutAlt,
  FaUserCheck,
  FaUserTimes,
  FaUsers,
} from "react-icons/fa";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [absent, setAbsent] = useState([]);
  const [leave, setLeave] = useState([]);
  // Define the query key
  const queryKey = ["employees"];
  const today = new Date();
  const formattedToday = format(today, "yyyy-MM-dd");
  // Use the useQuery hook to fetch data
  const { data: employees = [], refetch } = useQuery(queryKey, async () => {
    const url = `https://erp-server-nine.vercel.app/employees`;
    const res = await fetch(url);
    const data = await res.json();
    const myEmployee = data.filter((d) => d.hrmEmail == user?.email);

    return myEmployee;
  });
  useEffect(() => {
    // Fetch data from the URL
    const url = `https://erp-server-nine.vercel.app/attendance`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const absent = data.filter(
          (d) => d.hrmEmail == user?.email && d.date === formattedToday
        );
        setAbsent(absent);
        refetch();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [absent]);

  useEffect(() => {
    // Fetch data from the URL
    const url = `https://erp-server-nine.vercel.app/leave`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const leave = data.filter(
          (d) =>
            d.hrmEmail == user?.email && d.approveStartDate === formattedToday
        );

        setLeave(leave);
        refetch();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [leave]);
  return (
    <>
      <div className="py-10 px-5 bg-[#1E0C34]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <div className="bg-[#1E0C34] employee rounded-lg h-[150px] p-5 w-[250px]">
            <div className="bg-[#05BEFF] mx-auto mt-[-50px] h-[100px] flex items-center justify-center w-[100px] rounded-lg">
              <FaUsers className="text-white text-[50px]" />
            </div>
            <h1 className="text-white text-center mt-4">Total Employee</h1>
            <p className="text-white text-center">{employees?.length}</p>
          </div>
          <div className="bg-[#1E0C34] employee rounded-lg h-[150px] p-5 w-[250px]">
            <div className="bg-[#05BEFF] mx-auto mt-[-50px] h-[100px] flex items-center justify-center w-[100px] rounded-lg">
              <FaUserCheck className="text-white text-[50px]" />
            </div>

            <h1 className="text-white text-center mt-4">Today's Present</h1>
            <p className="text-white text-center">
              {parseInt(employees?.length) - parseInt(absent?.length)}
            </p>
          </div>
          <div className="bg-[#1E0C34] employee rounded-lg h-[150px] p-5 w-[250px]">
            <div className="bg-[#05BEFF] mx-auto mt-[-50px] h-[100px] flex items-center justify-center w-[100px] rounded-lg">
              <FaUserTimes className="text-white text-[50px]" />
            </div>

            <h1 className="text-white text-center mt-4">Today's Absent</h1>
            <p className="text-white text-center">{absent?.length}</p>
          </div>
          <div className="bg-[#1E0C34] employee rounded-lg h-[150px] p-5 w-[250px]">
            <div className="bg-[#05BEFF] mx-auto mt-[-50px] h-[100px] flex items-center justify-center w-[100px] rounded-lg">
              <FaSignOutAlt className="text-white text-[50px]" />
            </div>

            <h1 className="text-white text-center mt-4">Today's Leave</h1>
            <p className="text-white text-center">{leave.length}</p>
          </div>
        </div>
        <div className="py-5 mt-8 flex gap-5">
          <div className="bg-[#1E0C34] employee rounded-lg ">
            <HrmChart></HrmChart>
          </div>
          <div className="bg-[#1E0C34] employee rounded-lg ">
            <HrmComposed></HrmComposed>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Dashboard;
