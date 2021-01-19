import { useState, useContext } from "react";
import { TaskContext } from "../taskContext/taskContext";

const AddTask = () => {
  const { addTask, showAddTask } = useContext(TaskContext);

  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Por favor adicione uma tarefa");
      return;
    }
    addTask({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <>
      {showAddTask && (
        <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
            <label>Tarefa</label>
            <input
              type="text"
              placeholder="Add tarefa"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Dia e hora</label>
            <input
              type="text"
              placeholder="Add Dia e hora"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
          </div>
          <div className="form-control form-control-check">
            <label>Relembrar</label>
            <input
              type="checkbox"
              checked={reminder}
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
            />
          </div>
          <input
            type="submit"
            value="salvar tarefa"
            className="btn btn-block"
          />
        </form>
      )}
    </>
  );
};

export default AddTask;
