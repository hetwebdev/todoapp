const AddTask = ({ currentTaskValue, onTypeTaskName, onClickAdd }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onClickAdd(currentTaskValue);
    }
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <input
        type="text"
        placeholder="Add Task"
        required
        value={currentTaskValue}
        className="px-4 py-2 bg-slate-200 rounded-sm font-inter active:border-slate-800"
        onChange={onTypeTaskName}
        autoFocus
        onKeyDown={handleKeyDown}
      />
      <button
        disabled={!currentTaskValue.trim()}
        className={`px-4 py-2 ${
          currentTaskValue.trim()
            ? "bg-slate-500 hover:bg-slate-600"
            : "bg-gray-300"
        } text-white rounded-sm`}
        onClick={() => onClickAdd(currentTaskValue)}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
