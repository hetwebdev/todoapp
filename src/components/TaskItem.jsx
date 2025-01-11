import { RiDeleteBinLine } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";

const TaskItem = ({
  id,
  taskName,
  isCompleted,
  onToggleTaskCompletion,
  onDeleteTask,
}) => {
  return (
    <li className="list-none p-4 bg-slate-100 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex gap-6 items-center justify-center">
          <input
            type="checkbox"
            name="TaskState"
            id={id}
            checked={isCompleted}
            className="size-4"
            onChange={() => onToggleTaskCompletion(id)}
          />
          <p className="font-inter font-semibold text-slate-800">
            {taskName || "can't load taskname"}
          </p>
        </div>
        <div className="w-fit flex items-center gap-2">
          <div className="p-1 size-8 text-slate-700 rounded-md flex items-center justify-center hover:bg-slate-300 hover:text-slate-900">
            <RiDeleteBinLine
              className="size-6"
              onClick={() => onDeleteTask(id)}
            />
          </div>
          {isCompleted ? null : (
            <div className="p-1 size-8 text-slate-700 rounded-md flex items-center justify-center hover:bg-slate-300 hover:text-slate-900">
              <LuPencil className="size-6" />
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
