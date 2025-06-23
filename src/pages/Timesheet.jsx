// pages/Timesheets.jsx
export default function Timesheets() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">My Timesheets</h2>
        <button className="btn btn-primary">+ Add Entry</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Project</th>
              <th>Hours</th>
              <th>Description</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-06-22</td>
              <td>Alpha</td>
              <td>6</td>
              <td>Bug fixes and UI polish</td>
              <td>
                <span className="badge badge-warning">Pending</span>
              </td>
              <td>
                <button className="btn btn-sm btn-outline">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
