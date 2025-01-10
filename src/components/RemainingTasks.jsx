import TaskItem from "./TaskItem";

const RemainingTasks = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <p className="font-poppins font-bold text-xl mb-4">Remaining Tasks</p>
        <p className="font-poppins font-bold text-xl mb-4">0</p>
      </div>
      <div className="flex flex-col gap-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  );
};

export default RemainingTasks;
