import TaskItem from "./TaskItem";

const RemainingTasks = ({ tasks }) => {
  let todos = [...tasks];

  const remainingtasks = todos.filter((todo) => {
    return todo.is_task_completed === false;
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <p className="font-poppins font-bold text-xl mb-4">Remaining Tasks</p>
        <p className="font-poppins font-bold text-xl mb-4">
          {remainingtasks.length || 0}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {remainingtasks.map((task) => {
          return (
            <TaskItem key={task.task_id} taskName={task.task_name}></TaskItem>
          );
        })}
      </div>
    </div>
  );
};

export default RemainingTasks;
