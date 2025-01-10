const AddTask = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <input
        type="text"
        placeholder="Add Task"
        required
        className="px-4 py-2 bg-slate-200 rounded-sm font-inter active:border-slate-800"
      />
      <button className="px-4 py-2 text-white bg-slate-500 rounded-sm font-inter hover:bg-slate-600 ">
        Add
      </button>
    </div>
  );
};

export default AddTask;
