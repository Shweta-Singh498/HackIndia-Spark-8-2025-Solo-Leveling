import React from "react";

export const Button = ({ children, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-light text-black rounded hover:bg-purple-700 hover:text-white border border-gray-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
