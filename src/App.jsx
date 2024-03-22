import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTask);
  };
  const deleteTaskId = (id) => {
    const afterDeleteingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeleteingTasks);
    console.log("Silindi");
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1 className="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Görevler
      </h1>
      <TaskList tasks={tasks} onDelete={deleteTaskId} />
    </div>
  );
}

export default App;