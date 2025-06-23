import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

function StaticNav() {
  return (
    <div className="navbar bg-base-100 px-6 border-b border-base-300">
      <Logo />
      <div className="flex gap-3">
        <Button to="/login">Login</Button>
        <Button to="/register" type="outline">
          Register
        </Button>
      </div>
    </div>
  );
}

export default StaticNav;
