import React from "react";

function TransformContainer({ children }) {
  return (
    <div className={`flex justify-center items-center h-96 p-4`}>
      {children}
    </div>
  );
}

export default TransformContainer;
