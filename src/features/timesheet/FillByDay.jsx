import React, { useState } from "react";

const today = new Date();
const getTodayLabel = () => {
  return `${today.toLocaleDateString()} (${today.toLocaleDateString(undefined, {
    weekday: "short",
  })})`;
};

export default function FillByDay() {
  const [entries, setEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    project: "",
    hours: 0.5,
    billable: false,
    category: "",
    issueId: "",
    notes: "",
  });

  const handleAddEntry = () => {
    setEntries([...entries, { date: getTodayLabel(), ...formData }]);
    setFormData({
      project: "",
      hours: 0.5,
      billable: false,
      category: "",
      issueId: "",
      notes: "",
    });
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="bg-base-100 p-6 rounded-lg shadow border border-base-300 space-y-4 min-h-[300px]">
      <h2 className="text-lg font-semibold text-heading mb-2">
        Day-wise Timesheet
      </h2>

      <div className="flex justify-end">
        <button
          className="btn btn-sm btn-outline"
          onClick={() => setShowModal(true)}
        >
          + Add Entry
        </button>
      </div>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Project</th>
            <th>Hours</th>
            <th>Billable</th>
            <th>Category</th>
            <th>Issue ID</th>
            <th>Notes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.date}</td>
              <td>{entry.project}</td>
              <td>{entry.hours}</td>
              <td>{entry.billable ? "Yes" : "No"}</td>
              <td>{entry.category}</td>
              <td>{entry.issueId}</td>
              <td>{entry.notes}</td>
              <td>
                <button className="btn btn-sm btn-error btn-outline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-sm btn-primary">Submit Timesheet</button>

      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box relative">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg mb-4">Add Timesheet Entry</h3>
            <div className="form-control grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="col-span-full">
                <label className="label-text">Date</label>
                <p className="text-sm font-medium text-base-content">
                  {getTodayLabel()}
                </p>
              </div>

              <div>
                <label className="label-text">Project</label>
                <select
                  name="project"
                  className="select select-sm select-bordered w-full"
                  value={formData.project}
                  onChange={handleChange}
                >
                  <option value="">Select Project</option>
                  <option value="Project A">Project A</option>
                  <option value="Project B">Project B</option>
                </select>
              </div>

              <div>
                <label className="label-text">Hours</label>
                <select
                  name="hours"
                  className="select select-sm select-bordered w-full"
                  value={formData.hours}
                  onChange={handleChange}
                >
                  {[...Array(8)].map((_, i) => {
                    const val = 0.5 * (i + 1);
                    return (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-span-full">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    name="billable"
                    className="checkbox checkbox-sm"
                    checked={formData.billable}
                    onChange={handleChange}
                  />
                  <span className="label-text">Billable</span>
                </label>
              </div>

              <div>
                <label className="label-text">Category</label>
                <select
                  name="category"
                  className="select select-sm select-bordered w-full"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  <option value="Development">Development</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Review">Review</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="label-text">Issue ID</label>
                <input
                  type="text"
                  name="issueId"
                  placeholder="Issue ID"
                  className="input input-sm input-bordered w-full"
                  value={formData.issueId}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-full">
                <label className="label-text">Notes (optional)</label>
                <textarea
                  name="notes"
                  className="textarea textarea-sm textarea-bordered w-full"
                  rows="2"
                  placeholder="Notes"
                  value={formData.notes}
                  onChange={handleChange}
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
              <button
                className="btn btn-sm btn-primary"
                onClick={handleAddEntry}
              >
                Add Entry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
