import React, { useState } from "react";
import TransformText from "./TransformText";
import TransformImage from "./TransformImage";
import TransformCube from "./TransformCube";
import TransformContainer from "./TransformContainer";

function TransformItems() {
  const text = <TransformText className={itemClasses} />;
  const image = <TransformImage className={itemClasses} />;
  const cube = <TransformCube className={itemClasses} />;

  let [activeComp, setActiveComp] = useState(text);
  let containerClasses = "";
  let itemClasses = "";

  return (
    <section className="max-w-80">
      <div className="bg-green-600">
        <TransformContainer className={containerClasses}>
          {activeComp}
        </TransformContainer>
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
