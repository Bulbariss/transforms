import React, { useState } from "react";
import TransformText from "./atoms/TransformText";
import TransformImage from "./atoms/TransformImage";
import TransformCube from "./atoms/TransformCube";
import TransformContainer from "./molecules/TransformContainer";

function TransformItems() {
  const text = <TransformText ContainerCss />;
  const image = <TransformImage ContainerCss />;
  const cube = <TransformCube ContainerCss />;

  let [activeComp, setActiveComp] = useState(text);

  return (
    <section className="max-w-80">
      <div className="bg-green-600">
        <TransformContainer>{activeComp}</TransformContainer>
      </div>

      <div className="h-14 flex justify-center items-center max-w-80">
        <button
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold w-24 h-8 rounded-lg mx-2"
          onClick={() => setActiveComp((activeComp = text))}
        >
          Text
        </button>
        <button
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold w-24 h-8 rounded-lg mx-2"
          onClick={() => setActiveComp((activeComp = image))}
        >
          Image
        </button>
        <button
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold w-24 h-8 rounded-lg mx-2"
          onClick={() => setActiveComp((activeComp = cube))}
        >
          Cube
        </button>
      </div>
    </section>
  );
}

export default TransformItems;
