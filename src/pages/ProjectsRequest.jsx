// pages/ProjectRequest.jsx
export default function ProjectRequest() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Request Access to a Project</h2>
      <form>
        <select className="select select-bordered w-full mb-4">
          <option disabled selected>
            Select a project
          </option>
          <option>Project Alpha</option>
          <option>Project Beta</option>
        </select>
        <button className="btn btn-primary w-full">Submit Request</button>
      </form>
    </div>
  );
}
