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
      <h3 className="font-bold text-3xl pb-2">Item CSS</h3>
      <Textarea value={input} onChange={handleOnChange} placeholder="test" />
    </div>
  ));
}

export default ItemCss;
