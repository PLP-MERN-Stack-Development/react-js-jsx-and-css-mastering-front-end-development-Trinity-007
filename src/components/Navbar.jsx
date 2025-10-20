import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function Navbar() {
  const { toggle } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-xl">Week 3 React App</h1>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/tasks" className="hover:underline">Tasks</Link>
          <Link to="/posts" className="hover:underline">Posts</Link>
          <button className="bg-white text-blue-500 px-3 py-1 rounded" onClick={toggle}>Toggle Theme</button>
        </div>

        <div className="sm:hidden flex items-center gap-2">
          <button onClick={toggle} className="bg-white text-blue-500 px-2 py-1 rounded">☼</button>
          <button onClick={() => setOpen(o => !o)} aria-expanded={open} aria-label="Open menu" className="bg-white text-blue-500 px-2 py-1 rounded">☰</button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden mt-2 px-4 pb-4">
          <Link to="/" className="block py-1">Home</Link>
          <Link to="/tasks" className="block py-1">Tasks</Link>
          <Link to="/posts" className="block py-1">Posts</Link>
        </div>
      )}
    </nav>
  );
}
