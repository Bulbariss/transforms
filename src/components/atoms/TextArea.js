import React from "react";

function TextArea() {
  return (
    <textarea
      placeholder="type your message"
      maxLength="180"
      cols="50"
      rows="6"
      wrap="hard"
    ></textarea>
  );
}

export default TextArea;
