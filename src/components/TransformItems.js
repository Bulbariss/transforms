import React, { useState } from "react";
import TransformText from "./atoms/TransformText";
import TransformImage from "./atoms/TransformImage";
import TransformCube from "./atoms/TransformCube";
import Button from "./atoms/Button";
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
      <TransformContainer>{STATES[activeComp]}</TransformContainer>
      <div
        className="h-14 flex justify-center items-center max-w-80 absolute w-full"
        style={{ marginTop: "-3.5rem" }}
      >
        <Button
          className={`${
            activeComp === "text"
              ? "bg-indigo-900 cursor-not-allowed"
              : "hover:bg-indigo-600 bg-indigo-700"
          } mx-2 text-white`}
          onClick={() => setActiveComp("text")}
          type="pill"
        >
          Text
        </Button>
        <Button
          className={`${
            activeComp === "image"
              ? "bg-indigo-900 cursor-not-allowed"
              : "hover:bg-indigo-600 bg-indigo-700"
          } mx-2 text-white`}
          onClick={() => setActiveComp("image")}
          type="pill"
        >
          Image
        </Button>
        <Button
          className={`${
            activeComp === "cube"
              ? "bg-indigo-900 cursor-not-allowed"
              : "hover:bg-indigo-600 bg-indigo-700"
          } mx-2 text-white`}
          onClick={() => setActiveComp("cube")}
          type="pill"
        >
          Cube
        </Button>
      </div>
    </section>
  );
}

export default TransformItems;
