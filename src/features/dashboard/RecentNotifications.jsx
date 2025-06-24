function RecentNotifications() {
  return (
    <div className="card bg-base-100 shadow border border-base-300 p-4 col-span-1 sm:col-span-2">
      <h3 className="font-semibold text-heading mb-2">Recent Notifications</h3>
      <ul className="text-paragraph list-disc pl-5">
        <li>Your timesheet for last week was approved</li>
        <li>Project Z access request is pending</li>
        <li>Reminder: Log your hours before Friday</li>
      </ul>
    </div>
  );
}

export default RecentNotifications;
