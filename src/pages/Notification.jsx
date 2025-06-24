const notifications = [
  {
    type: "approval",
    message: "Your timesheet for June 10 - June 15 has been approved.",
    date: "2025-06-22",
  },
  {
    type: "assignment",
    message: "You have been added to Project Alpha as a Developer.",
    date: "2025-06-21",
  },
  {
    type: "reminder",
    message: "Don't forget to submit this week's timesheet.",
    date: "2025-06-20",
  },
];

const badgeStyle = {
  approval: "badge-success",
  assignment: "badge-info",
  reminder: "badge-warning",
};

const badgeLabel = {
  approval: "Approved",
  assignment: "Assigned",
  reminder: "Reminder",
};

export default function NotificationsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-heading">Notifications</h1>
      <div className="space-y-2">
        {notifications.map((note, idx) => (
          <div
            key={idx}
            className="border border-base-300 bg-base-100 p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="font-medium text-base-content">{note.message}</p>
              <p className="text-xs text-base-content/70 mt-1">
                {new Date(note.date).toDateString()}
              </p>
            </div>
            <div>
              <span className={`badge badge-sm ${badgeStyle[note.type]}`}>
                {badgeLabel[note.type]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
