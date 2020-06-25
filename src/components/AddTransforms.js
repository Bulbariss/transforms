import React, { useRef, useContext } from "react";
import TransformCards from "./molecules/TransformCards";
import Select from "./atoms/Select";
import { counterContext } from "./store/Store";
import { useObserver } from "mobx-react-lite";

function AddTransforms() {
  const store = useContext(counterContext);

  let select = useRef();

  function addTransform() {
    store.addItem(
      select.current.value.split(",")[0],
      "",
      select.current.value.split(",")[1]
    );
  }

  return useObserver(() => (
    <section className="max-w-80">
      <div className="min-h-14 flex items-center px-4 bg-gray-200">
        <p className="text-lg font-bold ">
          transform: {store.items.map((el) => `${el.name}(${el.value}) `)}
        </p>
      </div>
      <div className="flex px-4 items-left md:items-center py-4 flex-col md:flex-row bg-gray-300">
        <h1 className="font-bold text-2xl pr-4 pb-2 md:pb-0">Add Transform</h1>
        <div className="">
          <Select ref={select} />
          <button
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold w-24 h-8 rounded-lg mx-2"
            onClick={() => addTransform()}
          >
            add
          </button>
        </div>
      </div>
      <TransformCards />
    </section>
  ));
}

export default AddTransforms;
