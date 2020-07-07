import React, { useContext, useState } from "react";
import { appContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";
import Textarea from "../atoms/Textarea";

function ItemCss() {
  const store = useContext(appContext);
  let [input, setInput] = useState(store.itemCss);

  function handleOnChange(event) {
    setInput((input = event.target.value));
    store.itemCss = event.target.value;
  }

  return useObserver(() => (
    <div className="w-full bg-grey-200 p-4 relative">
      <label htmlFor="item" className="font-bold text-3xl pb-2">
        Item CSS
      </label>
      <Textarea value={input} onChange={handleOnChange} id="item" />
    </div>
  ));
}

export default ItemCss;
