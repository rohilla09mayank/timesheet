const user = {
  name: "Mayank Sharma",
  email: "mayank@example.com",
  role: "Employee",
  department: "Frontend Development",
  projects: ["Client CRM", "Internal Dashboard"],
  joined: "2023-08-01",
};

export default function Profile() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-heading">My Profile</h1>
      <div className="card bg-base-100 shadow border border-base-300">
        <div className="card-body space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-heading">Basic Info</h2>
            <p>
              <span className="font-medium">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-medium">Role:</span> {user.role}
            </p>
            <p>
              <span className="font-medium">Department:</span> {user.department}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-heading">Projects</h2>
            <ul className="list-disc list-inside">
              {user.projects.map((project, idx) => (
                <li key={idx}>{project}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-heading">Other</h2>
            <p>
              <span className="font-medium">Joined:</span>{" "}
              {new Date(user.joined).toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
