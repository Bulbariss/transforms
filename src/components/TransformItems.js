import React, { useState } from "react";
import TransformText from "./atoms/TransformText";
import TransformImage from "./atoms/TransformImage";
import TransformCube from "./atoms/TransformCube";
import TransformContainer from "./molecules/TransformContainer";

function TransformItems() {
  const STATES = {
    text: <TransformText />,
    image: <TransformImage />,
    cube: <TransformCube />,
  };

  let [activeComp, setActiveComp] = useState("text");

  return (
    <section className="max-w-80">
      <div className="bg-green-600">
        <TransformContainer>{STATES[activeComp]}</TransformContainer>
      </div>

      <div className="h-14 flex justify-center items-center max-w-80">
        <button
          className={`bg-test-100 hover:bg-blue-900 text-white font-bold w-24 h-8 rounded-lg mx-2 ${
            activeComp === "text" ? "bg-test-200" : ""
          }`}
          onClick={() => setActiveComp("text")}
        >
          Text
        </button>
        <button
          className={`bg-test-100 hover:bg-blue-900 text-white font-bold w-24 h-8 rounded-lg mx-2 ${
            activeComp === "image" ? "bg-test-200" : ""
          }`}
          onClick={() => setActiveComp("image")}
        >
          Image
        </button>
        <button
          className={`bg-test-100 hover:bg-blue-900 text-white font-bold w-24 h-8 rounded-lg mx-2 ${
            activeComp === "cube" ? "bg-test-200" : ""
          }`}
          onClick={() => setActiveComp("cube")}
        >
          Cube
        </button>
      </div>
    </section>
  );
}

export default TransformItems;
