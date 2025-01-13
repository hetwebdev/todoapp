import { RiDeleteBinLine } from "react-icons/ri";

const TotalTasks = ({ tasks, onDeleteAllTask }) => {
  return (
    <div className="flex items-center gap-2">
      <p className="font-inter font-medium text-slate-700 px-4 py-2 bg-slate-300 rounded-sm">
        Total Tasks
      </p>
      <div className="font-inter font-medium text-slate-700 px-4 py-2 bg-slate-300 rounded-sm">
        {tasks.length || 0}
      </div>
      <button
        disabled={tasks.length === 0 ? true : false}
        className={`text-white px-4 py-2  rounded-sm cursor-pointer  ${
          tasks.length === 0 ? "bg-red-300" : "bg-red-500 hover:bg-red-700"
        }`}
      >
        <RiDeleteBinLine className="size-6" onClick={onDeleteAllTask} />
      </button>
    </div>
  );
};

export default TotalTasks;
