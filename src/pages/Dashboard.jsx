// pages/Dashboard.jsx
export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-primary text-primary-content p-4">
          <p className="text-lg">Total Hours Logged</p>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="card bg-secondary text-secondary-content p-4">
          <p className="text-lg">Timesheets Submitted</p>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="card bg-accent text-accent-content p-4">
          <p className="text-lg">Pending Approvals</p>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}
