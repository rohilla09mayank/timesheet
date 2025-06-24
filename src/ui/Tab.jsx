function Tab({ activeTab, onClick }) {
  return (
    <div className="flex gap-2">
      <button
        className={`btn btn-sm rounded-md ${
          activeTab === "week" ? "btn-primary" : "btn-outline"
        }`}
        onClick={() => onClick("week")}
      >
        By Week
      </button>
      <button
        className={`btn btn-sm rounded-md ${
          activeTab === "day" ? "btn-primary" : "btn-outline"
        }`}
        onClick={() => onClick("day")}
      >
        By Day
      </button>
    </div>
  );
}

export default Tab;
