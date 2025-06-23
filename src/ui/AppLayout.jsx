import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  const user = {
    name: "John Doe",
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <AppNav user={user} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 px-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
