import Button from "./Button";
import { useContext } from "react";
import { TaskContext } from "../taskContext/taskContext";

const Header = ({ title }) => {
  const { showAddTask, setShowAddTask } = useContext(TaskContext);

  const onClick = () => {
    setShowAddTask((prevValue) => !prevValue);
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onClick}
      />
    </header>
  );
};

// Giving default props if its not passed .
Header.defaultProps = {
  title: "Task Tracker",
};

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
