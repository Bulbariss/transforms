import React, { useContext, useState } from "react";
import { counterContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";

function TransformCards({ id }) {
  const store = useContext(counterContext);
  let index = store.getIndexById(id);
  let [input, setInput] = useState(store.items[index].value);
  // let { name, value, placeholder } = store.getItemById(id);

  function handleOnChange(event) {
    setInput((input = event.target.value));
    store.changeValue(index, event.target.value);
  }

  return useObserver(() => (
    <div className="h-24 w-full md:w-56 rounded-lg bg-gray-400 m-2 px-4 py-2">
      <div className="flex justify-between">
        <p className="text-lg font-bold pb-2">{store.items[index].name}</p>
        <button className="text-red-600" onClick={() => store.removeItem(id)}>
          x
        </button>
      </div>
      {/* <p className="">{value}</p> */}
      <label className="" htmlFor="input-name">
        {/* <p className="pb-1">Your Name</p> */}
        <input
          className="w-full rounded-lg"
          type="text"
          placeholder={store.items[index].placeholder}
          value={input}
          onChange={() => handleOnChange(event)}
          //   onBlur={this.validateName}
        />
      </label>
    </div>
  ));
}

export default TransformCards;
