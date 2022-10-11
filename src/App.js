import { Header, Tasks, AddTask, Footer, About } from "./components/index";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  const endpoint = "http://localhost:5000/tasks";
  const [showAddNewTask, setShowAddNewTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const deleteTask = async (id) => {
    await fetch(`${endpoint}/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = async (id) => {
    const theTask = tasks.find((task) => task.id === id);
    theTask.reminder = !theTask.reminder;
    await fetch(`${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(theTask),
    });
    setTasks([...tasks]);
  };
  const addTask = async (newTask) => {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const json = await res.json();
    setTasks([...tasks, json]);
  };
  useEffect(() => {
    (async () => {
      const res = await fetch(endpoint);
      const json = await res.json();
      setTasks(json);
    })();
  }, []);
  return (
    <Router>
      <div className="container">
        <Header
          setShowAddNewTask={setShowAddNewTask}
          showAddNewTask={showAddNewTask}
        ></Header>

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {showAddNewTask && <AddTask addTask={addTask}></AddTask>}
                {tasks.length === 0 ? (
                  `no tasks to show`
                ) : (
                  <Tasks
                    tasks={tasks}
                    deleteTask={deleteTask}
                    toggleReminder={toggleReminder}
                  ></Tasks>
                )}
              </>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
