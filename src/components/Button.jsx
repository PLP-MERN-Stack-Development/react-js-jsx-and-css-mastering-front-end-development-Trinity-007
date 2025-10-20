import React from "react";

export default function Button({ children, variant = "primary", onClick, className = "", type = "button" }) {
  const base = "px-4 py-2 rounded font-semibold transition-colors duration-150 ";
  const styles = {
    primary: base + "bg-blue-500 text-white hover:bg-blue-600",
    secondary: base + "bg-gray-500 text-white hover:bg-gray-600",
    danger: base + "bg-red-500 text-white hover:bg-red-600"
  };

  const cls = `${styles[variant] || styles.primary} ${className}`.trim();

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
