import WeeklyProgress from "../features/dashboard/WeeklyProgress";
import Filters from "../ui/Filters";
import KpiGrid from "../ui/KpiGrid";

const user = {
  name: "Mayank Rohilla",
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold text-heading">
          Welcome, {user.name}
        </h1>
        <Filters />
      </div>
      <WeeklyProgress />
      <KpiGrid />
    </div>
  );
}
