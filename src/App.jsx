import RenameModal from "./components/RenameModal";
import AddTask from "./components/AddTask";
import TotalTasks from "./components/TotalTasks";
import RemainingTasks from "./components/RemainingTasks";
import CompletedTasks from "./components/CompletedTasks";

const App = () => {
  return (
    <main className="p-5">
      <RenameModal></RenameModal>
      <header className="w-full pb-4 border-b border-slate-500 flex flex-col vsm:flex-row gap-2 justify-between items-center">
        <AddTask />
        <TotalTasks />
      </header>
      <div className="mt-6 px-4 sm:px-6 flex flex-col gap-10 sm:flex-row ">
        <RemainingTasks />
        <CompletedTasks />
      </div>
    </main>
  );
};

export default App;
