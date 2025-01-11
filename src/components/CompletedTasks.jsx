import TaskItem from "./TaskItem";

const CompletedTasks = ({
  tasks,
  onToggleTaskCompletion,
  onDeleteTask,
  getTasksByComplition,
}) => {
  const completedtasks = getTasksByComplition(true);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <p className="font-poppins font-bold text-xl mb-4">Completed Tasks</p>
        <p className="font-poppins font-bold text-xl mb-4">
          {completedtasks.length || 0}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {completedtasks.map((task) => {
          return (
            <TaskItem
              key={task.task_id}
              id={task.task_id}
              taskName={task.task_name}
              isCompleted={task.is_task_completed}
              onToggleTaskCompletion={onToggleTaskCompletion}
              onDeleteTask={onDeleteTask}
            ></TaskItem>
          );
        })}
      </div>
    </div>
  );
};

export default CompletedTasks;
