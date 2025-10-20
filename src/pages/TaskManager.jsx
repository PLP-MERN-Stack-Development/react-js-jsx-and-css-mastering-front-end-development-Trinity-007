import React, { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        📝 Task Manager App
      </h1>

      <div className="flex w-full max-w-md mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-grow border rounded-l-lg p-2 outline-none"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet...</p>
        ) : (
          tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-3 rounded-lg shadow-sm ${
                task.completed ? "bg-green-100" : "bg-white"
              }`}
            >
              <span
                onClick={() => toggleTask(task.id)}
                className={`cursor-pointer flex-grow ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                ✕
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskManager;
