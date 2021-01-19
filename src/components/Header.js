import Button from "./Button";
import { useContext } from "react";
import { TaskContext } from "../taskContext/taskContext";
import { useLocation } from "react-router-dom";

const Header = ({ title }) => {
  const { showAddTask, setShowAddTask } = useContext(TaskContext);

  const { pathname } = useLocation();

  const onClick = () => {
    setShowAddTask((prevValue) => !prevValue);
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      {pathname === "/" && (
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add"}
          onClick={onClick}
        />
      )}
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
