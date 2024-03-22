import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [textDesc, setTextDesc] = useState(task ? task.textDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTextChange = (event) => {
    setTextDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, textDesc);
    } else {
      onCreate(title, textDesc);
    }
    setTitle("");
    setTextDesc("");
  };
  return (
    // Burası görevlere güncelleme yapılan yer.

    <div>
      {" "}
      {taskFormUpdate ? (
        <div className=" w-full">
          <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl">
            Lütfen Taskı Düzenleyiniz!
          </h3>
          <form className="task-form">
            <label className="mb-4 mt-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-xl">
              Başlığı Düzenleyiniz?
            </label>
            <input
              value={title}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="mb-4 mt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-xl">
              Taskı Düzenleyiniz?
            </label>
            <textarea
              value={textDesc}
              onChange={handleTextChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              rows={5}
            />
            <button
              onClick={handleSubmit}
              className="task-button bg-yellow-500 hover:bg-yellow-600 border-yellow-500"
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        // Burası görevlerin yazıldığı yer.

        <div className="task-create">
          <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Lütfen Görev Ekleyiniz!
          </h3>
          <form className="task-form">
            <label className="mb-4 mt-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl">
              Başlık
            </label>
            <input
              value={title}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="mb-4 mt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl">
              Görev Giriniz!
            </label>
            <textarea
              value={textDesc}
              onChange={handleTextChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              rows={5}
            />
            <button
              onClick={handleSubmit}
              className="task-button bg-blue-400 hover:bg-blue-500"
            >
              Oluştur
            </button>
          </form>
        </div>
      )}{" "}
    </div>
  );
}

export default TaskCreate;
