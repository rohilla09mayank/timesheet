import { NavLink } from "react-router-dom";

import {
  LuBell,
  LuBriefcase,
  LuCalendarPlus,
  LuFileText,
  LuFolderCode,
  LuUser,
} from "react-icons/lu";

const navItems = [
  {
    to: "/app/dashboard",
    label: "Dashboard",
    icon: <LuFolderCode size={20} />,
  },
  {
    to: "/app/fill-timesheet",
    label: "Fill Timesheet",
    icon: <LuCalendarPlus size={20} />,
  },
  {
    to: "/app/timesheets",
    label: "Timesheet History",
    icon: <LuFileText size={20} />,
  },
  {
    to: "/app/my-projects",
    label: "My Projects",
    icon: <LuBriefcase size={20} />,
  },
  {
    to: "/app/notifications",
    label: "Notifications",
    icon: <LuBell size={20} />,
  },
  {
    to: "/app/profile",
    label: "Profile",
    icon: <LuUser size={20} />,
  },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-16 bg-base-200 flex flex-col items-center py-4 gap-4 border-r border-base-300">
      {navItems.map((item) => (
        <div
          key={item.to}
          className="tooltip tooltip-right font-semibold"
          data-tip={item.label}
        >
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `btn btn-ghost btn-circle ${
                isActive
                  ? "bg-primary text-primary-content"
                  : "text-base-content"
              }`
            }
          >
            {item.icon}
          </NavLink>
        </div>
      ))}
    </aside>
  );
}
