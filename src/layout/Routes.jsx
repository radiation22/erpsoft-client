import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import StartPage from "../Pages/StartPage/StartPage";
import HrmHome from "../Pages/Hrm/HrmHome";
import EmployeeHome from "../Components/Employee/EmployeeHome";
import Analytics from "../Pages/Anaylytics/Analytics";
import AnalyticsHome from "../Components/Analytics/AnalyticsHome";
import Recurting from "../Components/Employee/Recurting";
import Dashboard from "../Components/Employee/Dashboard";
import Finance from "../Components/Employee/Finance/Finance";
import Login from "./../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Position from "../Components/Employee/Position/Position";
import AddEmployee from "../Components/Employee/AddEmployee/AddEmployee";
import ManageEmployee from "../Components/Employee/ManageEmployee/ManageEmployee";
import FinancialYear from "../Pages/Account/FinancialYear";
import SubAccount from "./../Pages/Account/SubAccount";
import Attendance from "../Pages/Attendance/Attendance";
import MonthlyAttendance from "../Pages/Attendance/MonthlyAttendance";
import MissingAttend from "../Pages/Attendance/MissingAttend";
import Lateness from "../Pages/Attendance/Lateness";
import DebitVoucher from "../Pages/Account/DebitVoucher";
import CreditVoucher from "../Pages/Account/CreditVoucher";
import JournalVoucher from "../Pages/Account/JournalVoucher";
import BankRecon from "../Pages/Account/BankRecon";
import VoucherApproval from "../Pages/Account/VoucherApproval";
import Award from "../Pages/Award/Award";
import AddBank from "../Pages/Bank/AddBank";
import BankList from "../Pages/Bank/BankList";
import Department from "../Pages/Department/Department";
import Holiday from "../Pages/Leave/Holiday";
import WHoliday from "../Pages/Leave/WHoliday";
import LeaveType from "../Pages/Leave/LeaveType";
import LeaveApp from "../Pages/Leave/LeaveApp";
import Loan from "../Pages/Loan/Loan";
import LoanReport from "../Pages/Loan/LoanReport";
import ManageSalary from "../Pages/Payroll/ManageSalary";
import AdvanceSalary from "../Pages/Payroll/AdvanceSalary";
import GenerateSalary from "../Pages/Payroll/GenerateSalary";
import Clients from "../Pages/ProjectMange/Clients";
import Projects from "../Pages/ProjectMange/Projects";
import TaskManage from "../Pages/ProjectMange/TaskManage";
import Reports from "../Pages/ProjectMange/Reports";
import Interview from "../Pages/Recruitment/Interview";
import Selection from "../Pages/Recruitment/Selection";
import Shortlist from "../Pages/Recruitment/Shortlist";
import ManageCandidate from "../Pages/Recruitment/ManageCandidate";
import AddCandidate from "../Pages/Recruitment/AddCandidate";
import DailyPresent from "../Pages/Reports/DailyPresent";
import MonthlyPresent from "../Pages/Reports/MonthlyPresent";
import DailyAbsent from "../Pages/Reports/DailyAbsent";
import MonthlyAbsent from "../Pages/Reports/MonthlyAbsent";
import EmployeeOnLeave from "../Pages/Reports/EmployeeOnLeave";
import EmployeeReport from "../Pages/Reports/EmployeeReport";
import NoticeBoard from "../Pages/NoticeBoard/NoticeBoard";
import AddSubDepartment from "../Pages/Department/ManageDepartment";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import SubDepartment from "./../Pages/Department/SubDepartment";
import ManageDepartment from "../Pages/Department/ManageDepartment";
import ManageSub from "../Pages/Department/ManageSub";
import ManageAward from "../Pages/Award/ManageAward";
import ManageNotice from "../Pages/NoticeBoard/ManageNotice";
import ManageLoan from "../Pages/Loan/ManageLoan";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <StartPage></StartPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/hrm",
        element: (
          <PrivateRoute>
            <HrmHome></HrmHome>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/hrm", // Updated path to be relative
            element: <Dashboard></Dashboard>,
          },
          {
            path: "employee", // Updated path to be relative
            element: <EmployeeHome></EmployeeHome>,
          },
          {
            path: "debitVoucher", // Updated path to be relative
            element: <DebitVoucher></DebitVoucher>,
          },
          {
            path: "creditVoucher", // Updated path to be relative
            element: <CreditVoucher></CreditVoucher>,
          },
          {
            path: "addBank", // Updated path to be relative
            element: <AddBank></AddBank>,
          },
          {
            path: "bankList", // Updated path to be relative
            element: <BankList></BankList>,
          },
          {
            path: "journalVoucher", // Updated path to be relative
            element: <JournalVoucher></JournalVoucher>,
          },
          {
            path: "award", // Updated path to be relative
            element: <Award></Award>,
          },
          {
            path: "client", // Updated path to be relative
            element: <Clients></Clients>,
          },
          {
            path: "project", // Updated path to be relative
            element: <Projects></Projects>,
          },
          {
            path: "dPresent", // Updated path to be relative
            element: <DailyPresent></DailyPresent>,
          },
          {
            path: "dAbsent", // Updated path to be relative
            element: <DailyAbsent></DailyAbsent>,
          },
          {
            path: "employeeOnLeave", // Updated path to be relative
            element: <EmployeeOnLeave></EmployeeOnLeave>,
          },
          {
            path: "employeeReport", // Updated path to be relative
            element: <EmployeeReport></EmployeeReport>,
          },
          {
            path: "mAbsent", // Updated path to be relative
            element: <MonthlyAbsent></MonthlyAbsent>,
          },
          {
            path: "mPresent", // Updated path to be relative
            element: <MonthlyPresent></MonthlyPresent>,
          },
          {
            path: "manageCandidate", // Updated path to be relative
            element: <ManageCandidate></ManageCandidate>,
          },
          {
            path: "addCandidate", // Updated path to be relative
            element: <AddCandidate></AddCandidate>,
          },
          {
            path: "candidateShortlist", // Updated path to be relative
            element: <Shortlist></Shortlist>,
          },
          {
            path: "interview", // Updated path to be relative
            element: <Interview></Interview>,
          },
          {
            path: "candidateSelection", // Updated path to be relative
            element: <Selection></Selection>,
          },

          {
            path: "manageTask", // Updated path to be relative
            element: <TaskManage></TaskManage>,
          },
          {
            path: "reports", // Updated path to be relative
            element: <Reports></Reports>,
          },
          {
            path: "notice", // Updated path to be relative
            element: <NoticeBoard></NoticeBoard>,
          },
          {
            path: "voucherApprove", // Updated path to be relative
            element: <VoucherApproval></VoucherApproval>,
          },
          {
            path: "bankRecon", // Updated path to be relative
            element: <BankRecon></BankRecon>,
          },
          {
            path: "recuirtment", // Updated path to be relative
            element: <Recurting></Recurting>,
          },
          {
            path: "finance", // Updated path to be relative
            element: <Finance></Finance>,
          },
          {
            path: "position", // Updated path to be relative
            element: <Position></Position>,
          },
          {
            path: "subAccount", // Updated path to be relative
            element: <SubAccount></SubAccount>,
          },
          {
            path: "department", // Updated path to be relative
            element: <Department></Department>,
          },
          {
            path: "/hrm/department/manageDepartment", // Updated path to be relative
            element: <ManageDepartment></ManageDepartment>,
          },
          {
            path: "/hrm/department/manageSub", // Updated path to be relative
            element: <ManageSub></ManageSub>,
          },
          {
            path: "subDepartment", // Updated path to be relative
            element: <SubDepartment></SubDepartment>,
          },
          {
            path: "addEmployee", // Updated path to be relative
            element: <AddEmployee></AddEmployee>,
          },
          {
            path: "manageEmployee", // Updated path to be relative
            element: <ManageEmployee></ManageEmployee>,
          },
          {
            path: "financialYear", // Updated path to be relative
            element: <FinancialYear></FinancialYear>,
          },
          {
            path: "attendance", // Updated path to be relative
            element: <Attendance></Attendance>,
          },
          {
            path: "lateness", // Updated path to be relative
            element: <Lateness></Lateness>,
          },
          {
            path: "holiday", // Updated path to be relative
            element: <Holiday></Holiday>,
          },
          {
            path: "grantLoan", // Updated path to be relative
            element: <Loan></Loan>,
          },
          {
            path: "loanReport", // Updated path to be relative
            element: <LoanReport></LoanReport>,
          },
          {
            path: "manageSalary", // Updated path to be relative
            element: <ManageSalary></ManageSalary>,
          },
          {
            path: "/hrm/award/manageAward", // Updated path to be relative
            element: <ManageAward></ManageAward>,
          },
          {
            path: "/hrm/notice/manageNotice", // Updated path to be relative
            element: <ManageNotice></ManageNotice>,
          },
          {
            path: "/hrm/grantLoan/manageLoan", // Updated path to be relative
            element: <ManageLoan></ManageLoan>,
          },
          {
            path: "salaryAdvance", // Updated path to be relative
            element: <AdvanceSalary></AdvanceSalary>,
          },
          {
            path: "salaryGenerate", // Updated path to be relative
            element: <GenerateSalary></GenerateSalary>,
          },
          {
            path: "leaveApplication", // Updated path to be relative
            element: <LeaveApp></LeaveApp>,
          },
          {
            path: "leaveType", // Updated path to be relative
            element: <LeaveType></LeaveType>,
          },
          {
            path: "wHoliday", // Updated path to be relative
            element: <WHoliday></WHoliday>,
          },
          {
            path: "missattendance", // Updated path to be relative
            element: <MissingAttend></MissingAttend>,
          },
          {
            path: "monthlyAttendance", // Updated path to be relative
            element: <MonthlyAttendance></MonthlyAttendance>,
          },
        ],
      },

      {
        path: "/analytics",
        element: <Analytics></Analytics>,
        children: [
          {
            path: "analyticsHome",
            element: <AnalyticsHome></AnalyticsHome>,
          },
        ],
      },
    ],
  },
]);
