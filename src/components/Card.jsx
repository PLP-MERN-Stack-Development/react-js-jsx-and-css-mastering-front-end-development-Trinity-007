import React from "react";

export default function Card({ children, title }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 shadow-sm hover:shadow-md rounded p-4 mb-4 transition-shadow duration-150">
      {title && <h3 className="font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  );
}