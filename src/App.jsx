import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTask = [...tasks, response.data];
    setTasks(createdTask);
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTaskId = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);

    const afterDeleteingTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(afterDeleteingTasks);
    console.log("Silindi");
  };
  const editTaskById = (id, updateTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updateTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log("Güncellendi");
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1 className="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Görevler
      </h1>
      <TaskList tasks={tasks} onDelete={deleteTaskId} onUpdate={editTaskById} />
    </div>
  );
}

export default App;
