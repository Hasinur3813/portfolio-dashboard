import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../Components/Sidebar/Sidebar";

const RootLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="w-full min-h-screen bg-gray-800 flex overflow-x-hidden ">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`flex-1 p-3 mt-8 transition-all duration-300 overflow-y-auto ${
          isSidebarOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
