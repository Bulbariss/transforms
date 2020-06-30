import React, { useRef, useContext } from "react";
import TransformCards from "./molecules/TransformCards";
import Select from "./atoms/Select";
import { appContext } from "./store/Store";
import { useObserver } from "mobx-react-lite";
import { selectOptions } from "./atoms/SelectOptions";

function DisplayTransforms() {
  const store = useContext(appContext);

  let select = useRef();
  let ref = useRef();

  function getOption(id) {
    return selectOptions.find((h) => {
      return h.id === id;
    });
  }

  function addTransform() {
    const item = getOption(select.current.value);
    store.addItem(item.value, "", item.placeholder, item.regex);
  }

  function copy() {
    try {
      navigator.clipboard
        .writeText(`transform: ${store.getString()}`)
        .then(function () {
          ref.current.classList.remove("hidden");
          setTimeout(() => {
            ref.current.classList.add("hidden");
          }, 1200);
        });
    } catch {
      return;
    }
  }

  return useObserver(() => (
    <section className="max-w-80">
      <div className="min-h-14 flex items-center px-4 bg-gray-200 relative">
        <button
          onClick={() => copy()}
          ref={ref}
          className="text-lg font-bold my-4 leading-relaxed text-left"
        >
          transform: {store.getString()}
        </button>
        <div
          ref={ref}
          className="absolute text-lg font-bold w-full h-full leading-relaxed bg-gray-200 flex hidden items-center justify-center"
        >
          <span>copied!</span>
        </div>
      </div>
      <div className="flex px-4 items-left md:items-center py-4 flex-col md:flex-row bg-gray-300">
        <h1 className="font-bold text-2xl pr-4 pb-4 md:pb-0">Add Transform</h1>
        <div>
          <Select ref={select} />
          <button
            className="bg-test-200 text-white font-bold w-24 h-8 rounded-lg mt-4 md:mt-0 md:mx-4"
            onClick={() => addTransform()}
            style={{ height: "36px" }}
          >
            add
          </button>
        </div>
      </div>
      <TransformCards />
    </section>
  ));
}

export default DisplayTransforms;
