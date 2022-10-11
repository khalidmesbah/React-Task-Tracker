import React from "react";
import { useState } from "react";
const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !day) {
      alert("please set text and day");
      return;
    }
    addTask({
      text,
      day,
      reminder,
    });
    setDay("");
    setText("");
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>
          Task
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control">
        <label>
          Day and Time
          <input
            type="text"
            placeholder="day and time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          placeholder="Add Reminder"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
