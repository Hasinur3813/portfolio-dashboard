import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed z-50 top-0 left-0 h-full bg-gray-900 border-r p-4 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 `}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a
            href="https://hasinur.netlify.app"
            target="_blank"
            className="text-2xl md:text-3xl text-blue-500 font-extrabold tracking-wide"
          >
            Portfolio
          </a>
        </div>
        {/* Close Button for Desktop */}
        <button
          className="text-white cursor-pointer p-3 rounded-r-full bg-primaryColor fixed -right-11 top-0 md:block"
          onClick={toggleSidebar}
        >
          {isSidebarOpen && <FaTimes className="text-xl" />}
          {!isSidebarOpen && <FaBars className="text-xl" />}
        </button>
      </div>
      <hr className="my-1 border-white rounded-full border" />

      {/* Menu */}
      <h3 className="font-semibold text-lg mt-5 text-white">Menu</h3>

      {/* List */}
      <div className="flex flex-col space-y-4 h-full">
        <ul className="mt-4 space-y-2 text-white">
          <li>
            <Link to={"/dashboard"}>Projects</Link>
          </li>
          <li>
            <Link to={"/dashboard/add-project"}>Add Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
