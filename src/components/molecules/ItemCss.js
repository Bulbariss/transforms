import React, { useContext, useState } from "react";
import { appContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";

function ItemCss() {
  const store = useContext(appContext);
  let [input, setInput] = useState(store.itemCss);

  function handleOnChange(event) {
    setInput((input = event.target.value));
    store.itemCss = event.target.value;
  }

  return useObserver(() => (
    <div className="w-full bg-gray-nice p-4">
      <h3 className="font-bold text-3xl pb-2">Item(s) CSS</h3>
      <textarea
        placeholder="type your message"
        onChange={() => handleOnChange(event)}
        value={input}
        maxLength="180"
        rows="6"
        wrap="hard"
        className="h-64 w-full"
      ></textarea>
    </div>
  ));
}

export default ItemCss;
