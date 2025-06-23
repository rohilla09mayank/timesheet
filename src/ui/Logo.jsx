import { LuAlarmClockCheck } from "react-icons/lu";

function Logo() {
  return (
    <div className="flex-1">
      <span className="text-xl font-semibold text-base-700 flex items-center gap-3">
        <LuAlarmClockCheck className="text-primary text-2xl" />{" "}
        <span>TimesheetPro</span>
      </span>
    </div>
  );
}

export default Logo;
