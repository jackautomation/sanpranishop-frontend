import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ToDo() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
  
    const addTask = () => {
      if (task.trim()) {
        setTasks([...tasks, task]);
        setTask("");
      }
    };
  
    return (
      <div className="container mt-5">
        <div className="card shadow p-4">
          <h2 className="text-center text-primary">To-Do List</h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a task"
            />
            <button className="btn btn-success" onClick={addTask}>
              Add Task
            </button>
          </div>
          <ul className="list-group">
            {tasks.map((t, index) => (
              <li key={index} className="list-group-item">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }  
export default ToDo;    