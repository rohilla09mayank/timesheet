import { Link } from "react-router-dom";
import { LuSettings } from "react-icons/lu";

function UserSettings() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <LuSettings />
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-48"
      >
        <li>
          <Link to="/app/preferences">Preferences</Link>
        </li>
        <li>
          <Link to="/app/settings">App Settings</Link>
        </li>
        <li>
          <Link to="/app/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default UserSettings;
