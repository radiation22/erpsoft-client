import { useState } from "react";

import { Outlet } from "react-router-dom";
import HrmDash from "./HrmDash";
import Header from "../../Components/Header";

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="">
      <Header />

      <div className="flex">
        <div className="bg-[#1E0C34]">
          <HrmDash />
        </div>
        <div className="w-full py-5 bg-[#1E0C34]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
