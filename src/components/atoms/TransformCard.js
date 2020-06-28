import React, { useContext, useState } from "react";
import { appContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";
import { CheckInput } from "./InputRegex";

function TransformCards({ id }) {
  const store = useContext(appContext);
  let index = store.getIndexById(id);
  let [input, setInput] = useState(store.items[index].value);
  let [border, setBorder] = useState("");

  function handleOnChange(event) {
    setInput((input = event.target.value));
    store.changeValue(index, event.target.value);
  }

  function validateName() {
    if (CheckInput(store.items[index].regex, input)) {
      setBorder("");
    } else {
      setBorder("border-red-500");
    }
  }

  return useObserver(() => (
    <div className="h-24 w-full md:w-64 rounded-lg bg-gray-400 m-2 px-4 py-2 ">
      <div className="flex justify-between">
        <p className="text-lg font-bold pb-2">{store.items[index].name}</p>
        <button
          className="text-red-600 -mt-2"
          onClick={() => store.removeItem(id)}
        >
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            role="presentation"
            aria-hidden="true"
            className="h-4 w-4 text-on-background"
            stroke="red"
            strokeWidth="2px"
          >
            <line x1="2" y1="2" x2="22" y2="22" />
            <line x1="2" y1="22" x2="22" y2="2" />
          </svg>
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
