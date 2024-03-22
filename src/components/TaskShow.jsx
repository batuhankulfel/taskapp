import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  console.log(task);
  return (
    <div className=" task-show border-blue-400">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} />
      ) : (
        <div>
          {" "}
          <h1 className="mb-4 mt-2 font-bold text-xl  text-gray-900">
            Göreviniz
          </h1>
          <p className="w-full break-words">{task.title}</p>
          <h1 className="mb-4 mt-2 font-bold text-xl  text-gray-900">
            Açıklama
          </h1>
          <p className=" w-full break-words">{task.taskDesc}</p>
          <div>
            <button
              className=" font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-5  focus:outline-none text-white bg-red-500 hover:bg-red-600 "
              onClick={handleDeleteClick}
            >
              Sil
            </button>
            <button
              className="focus:outline-none text-white bg-green-600 hover:bg-green-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              onClick={handleEditClick}
            >
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
