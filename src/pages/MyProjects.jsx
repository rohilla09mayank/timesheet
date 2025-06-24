import { useState } from "react";

const dummyProjects = [
  {
    name: "Internal Dashboard",
    role: "Developer",
    category: "Billable",
    status: "Active",
    color: "primary",
  },
  {
    name: "Client CRM",
    role: "QA Tester",
    category: "Non-billable",
    status: "Inactive",
    color: "secondary",
  },
];

export default function MyProjects() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ projectName: "", reason: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Request submitted:", formData);
    setShowModal(false);
    setFormData({ projectName: "", reason: "" });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-heading">My Projects</h1>
        <button
          className="btn btn-sm btn-outline"
          onClick={() => setShowModal(true)}
        >
          + Request Project Access
        </button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {dummyProjects.map((proj, idx) => (
          <div
            key={idx}
            className="card border border-base-300 bg-base-100 shadow"
          >
            <div className="card-body">
              <h2 className={`card-title text-${proj.color}`}>{proj.name}</h2>
              <p>
                <span className="font-medium">Role:</span> {proj.role}
              </p>
              <p>
                <span className="font-medium">Category:</span> {proj.category}
              </p>
              <p>
                <span className="font-medium">Status:</span> {proj.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box relative">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg mb-4">
              Request Access to New Project
            </h3>
            <div className="form-control space-y-3">
              <div>
                <label className="label-text">Project Name</label>
                <input
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  className="input input-sm input-bordered w-full"
                  placeholder="Enter project name"
                />
              </div>
              <div>
                <label className="label-text">Reason</label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="textarea textarea-sm textarea-bordered w-full"
                  rows="3"
                  placeholder="Why do you need access?"
                ></textarea>
              </div>
            </div>
            <div className="modal-action">
              <button
                className="btn btn-sm"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-sm btn-primary" onClick={handleSubmit}>
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
