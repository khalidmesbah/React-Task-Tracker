import { FaTimes } from "react-icons/fa";
const Task = ({ task: { text, id, reminder }, deleteTask, toggleReminder }) => {
  return (
    <div
      className={`task ${reminder && "reminder"}`}
      onDoubleClick={() => toggleReminder(id)}
    >
      <h3>
        {text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteTask(id)}
        ></FaTimes>
      </h3>
    </div>
  );
};

export default Task;
