import React, { useContext, useState } from "react";
import { counterContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";
import { CheckAngle } from "./InputRegex";

function TransformCards({ id }) {
  const store = useContext(counterContext);
  let index = store.getIndexById(id);
  let [input, setInput] = useState(store.items[index].value);
  let [border, setBorder] = useState("");

  function handleOnChange(event) {
    setInput((input = event.target.value));
    store.changeValue(index, event.target.value);
  }

  function validateName() {
    if (CheckAngle(input)) {
      setBorder("");
    } else {
      setBorder("border-red-500");
    }
  }

  return useObserver(() => (
    <div className="h-24 w-full md:w-56 rounded-lg bg-gray-400 m-2 px-4 py-2 ">
      <div className="flex justify-between">
        <p className="text-lg font-bold pb-2">{store.items[index].name}</p>
        <button className="text-red-600" onClick={() => store.removeItem(id)}>
          x
        </button>
      </div>
      <label className="" htmlFor="input-name">
        <input
          className={`w-full rounded-lg ${border}`}
          type="text"
          placeholder={store.items[index].placeholder}
          value={input}
          onChange={() => handleOnChange(event)}
          onBlur={() => validateName()}
        />
      </label>
      <style jsx global>{`
        .border-red-500 {
          --border-opacity: 1 !important;
          border-color: #e75e5e !important;
          border-color: rgba(231, 94, 94, var(--border-opacity)) !important;
        }
      `}</style>
    </div>
  ));
}

export default TransformCards;
