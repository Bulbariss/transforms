import React from "react";

function ButtonPill({ label, className }) {
  return (
    <button
      className={`bg-blue-700 hover:bg-blue-900 text-white font-bold w-24 h-8 rounded-lg ${className}`}
    >
      {label}
    </button>
  );
}

export default ButtonPill;
