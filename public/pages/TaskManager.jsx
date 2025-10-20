import React, { useState, useEffect } from "react";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function TaskManager() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <div className="flex mb-4 gap-2">
        <input
          className="flex-1 border p-2 rounded"
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="flex gap-2 mb-4">
        {["All", "Active", "Completed"].map(f => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>
      {filteredTasks.map(task => (
        <Card key={task.id}>
          <div className="flex justify-between items-center">
            <span className={task.completed ? "line-through" : ""}>{task.text}</span>
            <div className="flex gap-2">
              <Button variant="primary" onClick={() => toggleComplete(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </Button>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
