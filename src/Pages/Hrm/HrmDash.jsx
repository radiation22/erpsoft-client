import React, { useState } from "react";
import {
  FaAngleRight,
  FaArtstation,
  FaBook,
  FaClone,
  FaCodepen,
  FaComment,
  FaCube,
  FaInstalod,
  FaMicrosoft,
  FaMoneyBillAlt,
  FaMoneyCheckAlt,
  FaPeopleArrows,
  FaPlaneDeparture,
  FaProjectDiagram,
  FaRegBell,
  FaRegUser,
  FaStaylinked,
  FaTable,
  FaTrophy,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";
import { FaTents } from "react-icons/fa6";
import { FcComboChart } from "react-icons/fc";
import { Link } from "react-router-dom";
import avt from "../../assets/avatar.jpeg";

const HrmDash = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isManufacturingDropdownOpen, setIsManufacturingDropdownOpen] =
    useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isAwardDropdownOpen, setIsAwardDropdownOpen] = useState(false);
  const [isBankDropdownOpen, setIsBankDropdownOpen] = useState(false);
  const [isDeptDropdownOpen, setIsDeptDropdownOpen] = useState(false);
  const [isLeaveDropdownOpen, setIsLeaveDropdownOpen] = useState(false);
  const [isLoanDropdownOpen, setIsLoanDropdownOpen] = useState(false);
  const [isPayrollDropdownOpen, setIsPayrollDropdownOpen] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [isRecruitmentDropdownOpen, setIsRecruitmentDropdownOpen] =
    useState(false);
  const [isReportDropdownOpen, setIsReportDropdownOpen] = useState(false);
  const [isNoticeDropdownOpen, setIsNoticeDropdownOpen] = useState(false);
  const [isAttendanceDropdownOpen, setIsAttendanceDropdownOpen] =
    useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleManufacturingDropdown = () => {
    setIsManufacturingDropdownOpen(!isManufacturingDropdownOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };
  const toggleAwardDropdown = () => {
    setIsAwardDropdownOpen(!isAwardDropdownOpen);
  };
  const toggleBankDropdown = () => {
    setIsBankDropdownOpen(!isBankDropdownOpen);
  };
  const toggleDeptDropdown = () => {
    setIsDeptDropdownOpen(!isDeptDropdownOpen);
  };
  const toggleLeaveDropdown = () => {
    setIsLeaveDropdownOpen(!isLeaveDropdownOpen);
  };
  const toggleLoanDropdown = () => {
    setIsLoanDropdownOpen(!isLoanDropdownOpen);
  };
  const togglePayrollDropdown = () => {
    setIsPayrollDropdownOpen(!isPayrollDropdownOpen);
  };
  const toggleProjectDropdown = () => {
    setIsProjectDropdownOpen(!isProjectDropdownOpen);
  };
  const toggleRecruitmentDropdown = () => {
    setIsRecruitmentDropdownOpen(!isRecruitmentDropdownOpen);
  };
  const toggleReportDropdown = () => {
    setIsReportDropdownOpen(!isReportDropdownOpen);
  };
  const toggleNoticeDropdown = () => {
    setIsNoticeDropdownOpen(!isNoticeDropdownOpen);
  };
  const toggleAttendanceDropdown = () => {
    setIsAttendanceDropdownOpen(!isAttendanceDropdownOpen);
  };

  const tabs = [
    { label: "Dashboard", content: [{ menu: "", link: "" }] },
    {
      label: "Employee",
      content: [
        { menu: "Position", link: "position" },
        { menu: "Add Employee", link: "addEmployee" },
        { menu: "Manage Employee", link: "manageEmployee" },
        { menu: "Employee Performance", link: "finance" },
      ],
    },
    {
      label: "Leave",
      content: [
        { menu: "Weekly Holiday", link: "wHoliday" },
        { menu: "Holiday", link: "holiday" },
        { menu: " Add Leave Type", link: "leaveType" },
        { menu: "Leave Application", link: "leaveApplication" },
      ],
    },
    {
      label: "Attendance",
      content: [
        { menu: "Attendance Form", link: "attendance" },
        { menu: " Monthly Attendance", link: "monthlyAttendance" },
        { menu: "Missing Attendance", link: "missattendance" },
      ],
    },
    {
      label: "Notice",
      content: [{ menu: "Notice Board", link: "notice" }],
    },
    {
      label: "Loan",
      content: [
        { menu: "Grant Loan", link: "grantLoan" },
        { menu: "Loan Report", link: "loanReport" },
      ],
    },
    {
      label: "Award",
      content: [{ menu: " New Award", link: "award" }],
    },
    {
      label: "Department",
      content: [
        { menu: "Department", link: "department" },
        { menu: "Sub Department", link: "subDepartment" },
      ],
    },
    {
      label: "Payroll",
      content: [
        { menu: "Salary Advance", link: "salaryAdvance" },
        { menu: "Salary Generate", link: "salaryGenerate" },
        { menu: "Manage Employee Salary", link: "manageSalary" },
      ],
    },
    {
      label: "Procurement",
      content: [
        { menu: "Request Form", link: "salaryAdvance" },
        { menu: "Request List", link: "salaryGenerate" },
        { menu: "Purchase Order Form", link: "manageSalary" },
        { menu: "Purchase Order List", link: "manageSalary" },
      ],
    },
    {
      label: "Bank",
      content: [
        { menu: "Add Bank", link: "addBank" },
        { menu: "Bank List", link: "bankList" },
      ],
    },
    {
      label: "Recruitment",
      content: [
        { menu: "Add Candidate", link: "addCandidate" },
        { menu: "Manage Candidate", link: "manageCandidate" },
      ],
    },
    {
      label: "Project Management",
      content: [
        { menu: "Clients", link: "client" },
        { menu: "Projects", link: "project" },
        { menu: "Manage Task", link: "manageTask" },
        { menu: "Reports", link: "reports" },
      ],
    },
    {
      label: "Reports",
      content: [
        { menu: "Daily Presents", link: "dPresent" },
        { menu: "Monthly Presents", link: "mPresent" },
        { menu: "Daily Absent", link: "dAbsent" },
        { menu: "Monthly Absent", link: "mAbsent" },
        { menu: "Employee On Leave", link: "employeeOnLeave" },
        { menu: "Employee Reports", link: "employeeReport" },
      ],
    },
  ];

  return (
    <div className="relative dash-board h-screen">
      <div className="md:flex md:w-64 bg-[#1E0C34] ps-4">
        <div className={`md:w-64 ${isOpen ? "block" : "hidden"} md:block`}>
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M14.293 5.293a1 1 0 00-1.414-1.414L10 8.586 6.121 4.707a1 1 0 00-1.414 1.414L8.586 10l-3.889 3.879a1 1 0 101.414 1.414L10 11.414l3.879 3.889a1 1 0 001.414-1.414L11.414 10l3.889-3.889z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
          <div className="flex gap-5">
            <div className="py-2">
              <div className="flex items-center gap-2">
                <Link to="/hrm">
                  <FaMicrosoft
                    onClick={() => setActiveTab(0)}
                    className={`text-white mt-5 text-xl cursor-pointer ${
                      activeTab === 0
                        ? "bg-rose-600 border border-[#05BEFF]"
                        : ""
                    }`}
                  ></FaMicrosoft>
                </Link>
              </div>

              <div className="gap-8">
                <div className="flex gap-5 items-center">
                  <FaUsers
                    onClick={() => setActiveTab(1)}
                    className={`text-white mt-5 text-xl cursor-pointer ${
                      activeTab === 1
                        ? "bg-rose-600 border border-[#05BEFF]"
                        : ""
                    }`}
                  />
                </div>
              </div>

              <div className="">
                <div className="flex gap-5 items-center">
                  <FaPlaneDeparture
                    onClick={() => setActiveTab(2)}
                    className={`text-white mt-5 text-xl cursor-pointer ${
                      activeTab === 2
                        ? "bg-rose-600 border border-[#05BEFF]"
                        : ""
                    }`}
                  />
                </div>
              </div>

              <div className="   gap-2">
                <div className="flex gap-5 items-center">
                  <FaRegUser
                    onClick={() => setActiveTab(3)}
                    className={`text-white mt-5 text-xl cursor-pointer ${
                      activeTab === 3
                        ? "bg-rose-600 border border-[#05BEFF]"
                        : ""
                    }`}
                  />
                </div>
              </div>
              <div className="gap-2">
                <div className="flex gap-5 items-center">
                  <FaRegBell
                    onClick={() => setActiveTab(4)}
                    className={`text-white mt-5 text-xl cursor-pointer ${
                      activeTab === 4
                        ? "bg-rose-600 border border-[#05BEFF]"
                        : ""
                    }`}
                  />
                </div>
              </div>
              <div className="gap-2">
                <div className="flex gap-5 items-center">
                  <FaMoneyBillAlt
                    onClick={() => setActiveTab(5)}
                    className={`text-white mt-5 text-xl cursor-pointer ${
                      activeTab === 5
                        ? "bg-rose-600 border border-[#05BEFF]"
                        : ""
                    }`}
                  />
                </div>
              </div>
              <div className="gap-2">
                <div className="flex gap-5 items-center">
                  <FaTrophy
                    onClick={() => setActiveTab(6)}
                    className={`text-white mt-5 text-xl cursor-pointer ${
                      activeTab === 6
                        ? "bg-rose-600 border border-[#05BEFF]"
                        : ""
                    }`}
                  />
                </div>
              </div>
              <div className="gap-2">
                <div className="flex gap-5 items-center">
                  <FaUniversity
                    onClick={() => setActiveTab(7)}
                    className={`text-white mt-5 text-xl cursor-pointer ${
                      activeTab === 7
                        ? "bg-rose-600 border border-[#05BEFF]"
                        : ""
                    }`}
                  />
                </div>
              </div>
              <div className="gap-2">
                <div className="flex gap-5 items-center">
                  <FaMoneyCheckAlt
                    onClick={() => setActiveTab(8)}
                    className={`text-white mt-5 text-xl cursor-pointer ${
                      activeTab === 8
                        ? "bg-rose-600 border border-[#05BEFF]"
                        : ""
                    }`}
                  />
                </div>
              </div>
              <div className="gap-2">
                <div className="flex gap-5 items-center">
                  <FaCodepen
                    onClick={() => setActiveTab(9)}
                    className={`text-white mt-5 text-xl cursor-pointer ${
                      activeTab === 9
                        ? "bg-rose-600 border border-[#05BEFF]"
                        : ""
                    }`}
                  ></FaCodepen>
                </div>
              </div>
              <div className="gap-2">
                <div className="flex gap-5 items-center">
                  <FaUniversity
                    onClick={() => setActiveTab(10)}
                    className={`text-white mt-5 text-xl cursor-pointer ${
                      activeTab === 10
                        ? "bg-rose-600 border border-[#05BEFF]"
                        : ""
                    }`}
                  />
                </div>
              </div>
              <div className="gap-2">
                <div className="flex gap-5 items-center">
                  <FaPeopleArrows
                    onClick={() => setActiveTab(11)}
                    className={`text-white mt-5 text-xl cursor-pointer ${
                      activeTab === 11
                        ? "bg-rose-600 border border-[#05BEFF]"
                        : ""
                    }`}
                  ></FaPeopleArrows>
                </div>
              </div>
              <div className="gap-2">
                <div className="flex gap-5 items-center">
                  <FaProjectDiagram
                    onClick={() => setActiveTab(12)}
                    className={`text-white mt-5 text-xl cursor-pointer ${
                      activeTab === 12
                        ? "bg-rose-600 border border-[#05BEFF]"
                        : ""
                    }`}
                  ></FaProjectDiagram>
                </div>
              </div>

              <div className="gap-2">
                <div className="flex gap-5 items-center">
                  <FaBook
                    onClick={() => setActiveTab(13)}
                    className={`text-white mt-5 text-xl cursor-pointer ${
                      activeTab === 13
                        ? "bg-rose-600 border border-[#05BEFF]"
                        : ""
                    }`}
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#1852A6] font-bold uppercase text-xl">
                {tabs[activeTab].label}
              </p>
              {Array.isArray(tabs[activeTab].content) ? (
                tabs[activeTab].content.map((cnt, index) => (
                  <Link key={index} to={cnt.link}>
                    <p className="text-white mt-1">{cnt.menu}</p>
                  </Link>
                ))
              ) : (
                <p className="text-white">{tabs[activeTab].content}</p>
              )}
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleDrawer}
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M14.293 5.293a1 1 0 00-1.414-1.414L10 8.586 6.121 4.707a1 1 0 00-1.414 1.414L8.586 10l-3.889 3.879a1 1 0 101.414 1.414L10 11.414l3.879 3.889a1 1 0 001.414-1.414L11.414 10l3.889-3.889z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HrmDash;
