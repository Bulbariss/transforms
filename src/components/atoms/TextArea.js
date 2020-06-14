import React from "react";

function TextArea() {
  return (
    <textarea
      placeholder="type your message"
      maxLength="180"
      // cols="50"
      rows="6"
      wrap="hard"
      className="h-64 w-full"
    ></textarea>
  );
}

export default TextArea;
