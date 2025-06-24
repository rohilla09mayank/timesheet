import AssignedProjects from "../features/dashboard/AssignedProjects";
import BillableOverview from "../features/dashboard/BillableOverview";
import MostLoggedProject from "../features/dashboard/MostLoggedProject";
import ProjectsOverview from "../features/dashboard/ProjectsOverview";
import RecentNotifications from "../features/dashboard/RecentNotifications";

function KpiGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectsOverview />
      <BillableOverview />
      <MostLoggedProject />
      <AssignedProjects />
      <RecentNotifications />
    </div>
  );
}

export default KpiGrid;
