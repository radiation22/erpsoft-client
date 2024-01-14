import { useState } from "react";

import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import AnalyticsDash from "./AnalyticsDash";

const Analytics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="">
      <div className="">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div className="flex ">
        <AnalyticsDash
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
