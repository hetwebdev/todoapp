import RenameModal from "./components/RenameModal";
import AddTask from "./components/AddTask";
import TotalTasks from "./components/TotalTasks";
import RemainingTasks from "./components/RemainingTasks";
import CompletedTasks from "./components/CompletedTasks";
import { useState } from "react";

const App = () => {
  const [TaskList, setTaskList] = useState([]);
  const [currentTaskName, setCurrentTaskName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalTaskName, setModalTaskName] = useState();
  const [modalTaskId, setModalTaskId] = useState();

  const handleTypeTaskName = (event) => {
    setCurrentTaskName(event.target.value);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleRenameTask = (taskId, taskName) => {
    handleShowModal();
    console.log("Id: ", taskId);
    console.log("Name: ", taskName);
    setModalTaskName(taskName);
    setModalTaskId(taskId);
  };

  const handleInsertTask = (taskname) => {
    let newtask = {
      task_id: `${Date.now()}-${Math.floor(Math.random() * 9000)}`,
      task_name: taskname,
      is_task_completed: false,
    };

    setTaskList((prevTasks) => {
      return [...prevTasks, newtask];
    });

    setCurrentTaskName("");
  };

  const handleToggleTaskCompletion = (taskId) => {
    setTaskList((prevTasks) => {
      return prevTasks.map((task) => {
        return task.task_id === taskId
          ? { ...task, is_task_completed: !task.is_task_completed }
          : task;
      });
    });
  };

  const handleTaskDelete = (taskId) => {
    setTaskList((prevTasks) => {
      return prevTasks.filter((task) => task.task_id !== taskId);
    });
  };

  const handleDeleteAllTasks = () => {
    setTaskList([]);
  };

  return (
    <main className=" p-5 w-full h-screen bg-white">
      {showModal ? (
        <div className="fixed top-0 left-0 w-full h-full z-10 bg-black/30 backdrop-blur-md flex items-center justify-center">
          <RenameModal
            onModalClose={handleShowModal}
            modalTaskName={modalTaskName}
            modalTaskId={modalTaskId}
            setTaskList={setTaskList}
          />
        </div>
      ) : null}

      <header className="w-full pb-4 border-b border-slate-500 flex flex-col vsm:flex-row gap-2 justify-between items-center">
        <AddTask
          currentTaskValue={currentTaskName}
          onTypeTaskName={handleTypeTaskName}
          onClickAdd={handleInsertTask}
        />
        <TotalTasks tasks={TaskList} onDeleteAllTask={handleDeleteAllTasks} />
      </header>

      <div className="mt-6 px-4 sm:px-6 flex flex-col gap-10 sm:flex-row ">
        <RemainingTasks
          tasks={TaskList}
          onToggleTaskCompletion={handleToggleTaskCompletion}
          onDeleteTask={handleTaskDelete}
          onRename={handleRenameTask}
        />
        <CompletedTasks
          tasks={TaskList}
          onToggleTaskCompletion={handleToggleTaskCompletion}
          onDeleteTask={handleTaskDelete}
        />
      </div>
    </main>
  );
};

export default App;
