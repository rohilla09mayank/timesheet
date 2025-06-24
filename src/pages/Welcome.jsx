import StaticNav from "../ui/StaticNav";
import Button from "../ui/Button";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-base-200">
      <StaticNav />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-8 py-16">
        <div>
          <h1 className="text-6xl font-bold mb-4">
            Track Time.
            <br /> Stay Productive.
          </h1>
          <p className="text-lg text-base-content mb-6">
            Welcome to TimesheetPro – the smart way to log hours, manage
            projects, and empower your team. Simple, efficient, and built for
            teams like yours.
          </p>
          <Button to="/register">Get Started</Button>
        </div>

        <div className="flex justify-center">
          <img
            src="https://illustrations.popsy.co/gray/work-from-home.svg"
            alt="Illustration"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </div>
  );
}
