import User from "../features/auth/User";
import Logo from "./Logo";
import UserSettings from "./UserSettings";
import Button from "./Button";

function AppNav({ user }) {
  return (
    <div className="navbar bg-base-100 px-6 shadow">
      <Logo />

      <div className="flex items-center gap-4">
        <User user={user} />
        <UserSettings />
        <Button type="ghost">Logout</Button>
      </div>
    </div>
  );
}

export default AppNav;
