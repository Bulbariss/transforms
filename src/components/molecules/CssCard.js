import React from "react";
import TextArea from "../atoms/TextArea";

function CustomCss({ label }) {
  return (
    <div className="w-full bg-gray-nice p-4">
      <h3 className="font-bold text-3xl pb-2">{label}</h3>
      <TextArea />
    </div>
  );
}

export default CustomCss;
