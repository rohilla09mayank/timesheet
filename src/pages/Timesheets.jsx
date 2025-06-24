import { useState } from "react";

export default function Timesheets() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date-desc");

  const data = [
    {
      week: "June 10 - June 15",
      totalHours: 32,
      billableHours: 28,
      entries: 6,
    },
    {
      week: "June 3 - June 8",
      totalHours: 40,
      billableHours: 40,
      entries: 7,
    },
  ];

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-heading">Timesheet History</h1>
        <div className="flex gap-2">
          <select
            className="select select-sm select-bordered"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="billable">Billable Only</option>
            <option value="non-billable">Non-billable Only</option>
          </select>
          <select
            className="select select-sm select-bordered"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="hours-desc">Most Hours</option>
            <option value="hours-asc">Least Hours</option>
          </select>
        </div>
      </div>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Week</th>
            <th>Total Hours</th>
            <th>Billable Hours</th>
            <th>Entries</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.week}</td>
              <td>{item.totalHours}</td>
              <td>{item.billableHours}</td>
              <td>{item.entries}</td>
              <td>
                <div className="flex gap-2">
                  <button className="btn btn-xs btn-outline">View</button>
                  <button className="btn btn-xs btn-outline">Print</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
