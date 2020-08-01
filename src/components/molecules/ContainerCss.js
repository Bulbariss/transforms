import React, { useContext, useState } from "react";
import { appContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";
import Textarea from "../atoms/Textarea";
import Button from "../atoms/Button";

function ContainerCss() {
  const store = useContext(appContext);
  let [input, setInput] = useState(store.containerCss);
  const defaultCss = `.container {
  max-height: 900px;
  min-height: 400px;
}`;

  function handleOnChange(event) {
    setInput(event.target.value);
    store.containerCss = event.target.value;
  }

  function setToDefault() {
    setInput(defaultCss);
    store.containerCss = defaultCss;
  }

  return useObserver(() => (
    <div className="w-full bg-grey-200 p-4 relative">
      <div className="flex justify-between pb-2 items-center">
        <label htmlFor="container" className="font-bold text-3xl">
          Container CSS
        </label>
        <Button
          onClick={() => setToDefault()}
          type="pill"
          className="border-2 border-grey-700 hover:border-grey-600 text-grey-700 hover:text-grey-600"
        >
          Default
        </Button>
      </div>
      <Textarea value={input} onChange={handleOnChange} id="container" />
    </div>
  ));
}

export default ContainerCss;
