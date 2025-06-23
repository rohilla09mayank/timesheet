import {
  LuFolderCode,
  LuLayoutGrid,
  LuSheet,
  LuSquareUser,
} from "react-icons/lu";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-base-100 shadow p-4 hidden md:block">
      <nav className="flex flex-col gap-2">
        <NavLink to="/app/dashboard" className="btn btn-ghost justify-start ">
          <LuLayoutGrid /> Dashboard
        </NavLink>
        <NavLink to="/app/timesheets" className="btn btn-ghost justify-start">
          <LuSheet /> Timesheets
        </NavLink>
        <NavLink
          to="/app/project-request"
          className="btn btn-ghost justify-start"
        >
          <LuFolderCode /> Project Request
        </NavLink>
        <NavLink to="/app/profile" className="btn btn-ghost justify-start">
          <LuSquareUser /> Profile
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
