import React, { useContext, useState } from "react";
import { appContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";
import Textarea from "../atoms/Textarea";
import Button from "../atoms/Button";

function ItemCss() {
  const store = useContext(appContext);
  let [input, setInput] = useState(store.itemCss);
  const defaultCss = `.item {
  transition: all 0.3s ease-in;
  perspective: 550px;
  transform-style: preserve-3d;
}`;

  function handleOnChange(event) {
    setInput((input = event.target.value));
    store.itemCss = event.target.value;
  }

  function setToDefault() {
    setInput(defaultCss);
    store.itemCss = defaultCss;
  }

  return useObserver(() => (
    <div className="w-full bg-grey-200 p-4 relative">
      <div className="flex justify-between pb-2 items-center">
        <label htmlFor="item" className="font-bold text-3xl">
          Item CSS
        </label>
        <Button
          onClick={() => setToDefault()}
          type="pill"
          className="border-2 border-grey-700 hover:border-grey-600 text-grey-700 hover:text-grey-600"
        >
          Default
        </Button>
      </div>
      <Textarea value={input} onChange={handleOnChange} id="item" />
    </div>
  ));
}

export default ItemCss;
