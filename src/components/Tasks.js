import { useContext } from "react";
import { TaskContext } from "../taskContext/taskContext";
import Task from "../components/Task";

const Tasks = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      {tasks.length > 0
        ? tasks.map((task) => <Task key={task.id} task={task} />)
        : "Sem tarefas , divirta-se 😁"}
    </>
  );
};

export default Tasks;
