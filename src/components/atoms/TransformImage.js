import React from "react";

function TransformText({ className }) {
  return (
    <img
      className={`rounded-lg w-auto h-1/2 ${className}`}
      src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
      alt="Woman paying for a purchase"
    />
  );
}

export default TransformText;
