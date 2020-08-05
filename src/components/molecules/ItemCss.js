import React, { useContext, useState } from "react";
import { appContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";
import Textarea from "../atoms/Textarea";
import Button from "../atoms/Button";

function ItemCss() {
  const store = useContext(appContext);
  let [input, setInput] = useState(getCss());
  function getCss() {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("itemCss")) {
        return JSON.parse(localStorage.getItem("itemCss"));
      } else {
        return store.itemCss;
      }
    } else {
      return store.itemCss;
    }
  }
  const defaultCss = `.item {
  transition: all 0.3s ease-in;
  perspective: 550px;
  transform-style: preserve-3d;
}`;

  function handleOnChange(event) {
    setInput((input = event.target.value));
    store.itemCss = event.target.value;
    store.writeItemCss();
  }

  function setToDefault() {
    setInput(defaultCss);
    store.itemCss = defaultCss;
    store.deleteItemCss();
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
          className="border-2 border-grey-700 hover:opacity-75 text-grey-700 transition-opacity"
        >
          Default
        </Button>
      </div>
      <Textarea value={input} onChange={handleOnChange} id="item" />
    </div>
  ));
}

export default ItemCss;
