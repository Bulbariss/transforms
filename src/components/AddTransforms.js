import React, { useState, useRef } from "react";
import TransformCards from "./TransformCards";

function AddTransforms() {
  let select = useRef();
  let [transforms, setTransforms] = useState([]);

  const test = () => {
    setTransforms(
      (transforms = transforms.concat([select.current.value.split(",")]))
    );
  };

  return (
    <section className="max-w-80">
      <div className="h-14 flex items-center px-4 bg-gray-200">
        <p className="text-lg font-bold ">transform:</p>
      </div>
      <div className="flex px-4 items-left md:items-center py-4 flex-col md:flex-row bg-gray-300">
        <h1 className="font-bold text-2xl pr-4 pb-2 md:pb-0">Add Transform</h1>
        <div className="">
          <select id="ice" className="pr-4" ref={select}>
            <option value={[["Volvo", "test1"]]}>Volvo</option>
            <option value={["Saab", "test2"]}>Saab</option>
            <option value={["Fiat", "test3"]}>Fiat</option>
            <option value={["Audi", "test4"]}>Audi</option>
          </select>
          <button
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold w-24 h-8 rounded-lg mx-2"
            onClick={test}
          >
            add
          </button>
        </div>
      </div>
      <TransformCards list={transforms} />
    </section>
  );
}

export default AddTransforms;
