function FilterBar() {
  return (
    <div className="flex justify-end gap-2">
      {["This Week", "Last Week", "Last Month", "Last 90 Days"].map((label) => (
        <button key={label} className="btn btn-sm btn-outline rounded-md">
          {label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
