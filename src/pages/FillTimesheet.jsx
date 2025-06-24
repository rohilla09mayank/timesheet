import { useState } from "react";
import Tab from "../ui/Tab";
import FillByWeek from "../features/timesheet/FillByWeek";
import FillByDay from "../features/timesheet/FillByDay";

export default function FillTimesheet() {
  const [activeTab, setActiveTab] = useState("week");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold text-heading">Fill Timesheet</h1>
        {/* Remove props and set URL for state */}
        <Tab activeTab={activeTab} onClick={setActiveTab} />
      </div>
      {activeTab === "week" ? <FillByWeek /> : <FillByDay />}
    </div>
  );
}
