import Button from "../../ui/Button";

function WeeklyProgress() {
  return (
    <div className="bg-base-100 p-6 rounded-lg shadow border border-base-300">
      <h2 className="text-lg font-semibold mb-2 text-heading">
        Weekly Progress
      </h2>
      <p className="text-paragraph text-sm mb-1">Target: 40 hrs/week</p>
      <p className="text-paragraph text-sm mb-1">Logged: 28 hrs</p>
      <p className="text-paragraph text-sm mb-4">
        Remaining: 12 hrs | Deadline: Fri, Jun 28
      </p>
      <Button to="/app/fill-timesheet">Fill Timesheet</Button>
      <progress
        className="progress progress-primary w-full"
        value="70"
        max="100"
      ></progress>
    </div>
  );
}

export default WeeklyProgress;
