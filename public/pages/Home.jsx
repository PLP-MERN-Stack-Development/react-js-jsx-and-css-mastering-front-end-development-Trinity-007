import React, { useState, useEffect } from "react";
import Card from "../components/Card.jsx";

function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish React assignment", completed: false },
    { id: 2, text: "Prepare for Week 4", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <input
          type="text"
          className="border p-2 flex-grow rounded"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      <div className="space-y-2">
        {tasks.map(task => (
          <Card key={task.id} title={task.text} content={
            <>
              <button onClick={() => toggleComplete(task.id)} className="mr-2">
                {task.completed ? "✅ Completed" : "⭕ Mark Done"}
              </button>
              <button onClick={() => deleteTask(task.id)} className="text-red-500">
                Delete
              </button>
            </>
          } />
        ))}
      </div>
    </div>
  );
}

export default Home;
