import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { TaskContext } from "../taskContext/taskContext";

const Task = ({ task }) => {
  const { deleteTask, toggleReminder } = useContext(TaskContext);
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          onClick={() => deleteTask(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
