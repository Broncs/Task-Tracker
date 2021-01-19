import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { TaskContextProvider } from "./taskContext/taskContext";

function App() {
  return (
    <TaskContextProvider>
      <div className="container">
        <Header />
        <AddTask />
        <Tasks />
      </div>
    </TaskContextProvider>
  );
}

export default App;
