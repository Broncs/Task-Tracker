import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appoint",
      day: "feb 5th at 2:30px",
      reminder: true,
    },
    {
      id: 2,
      text: "metting at scholl",
      day: "feb 6th at 2:30px",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "feb 7th at 2:30px",
      reminder: false,
    },
  ]);

  // ADD TAREFA ============
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // DeleteTask ============
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder =============
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        toggleReminder,
        addTask,
        showAddTask,
        setShowAddTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
