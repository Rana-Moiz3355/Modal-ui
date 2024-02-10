import React from "react";

function Button({ children, ...attributes }) {
  return (
    <button
      {...attributes}
      className="bg-blue-500 hover:bg-blue-700   px-3 py-2 rounded">
      {children}
    </button>
  );
}

export default Button;



