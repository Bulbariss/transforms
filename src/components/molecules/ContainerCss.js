import React, { useContext, useState } from "react";
import { appContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";
import Textarea from "../atoms/Textarea";

function ContainerCss() {
  const store = useContext(appContext);
  let [input, setInput] = useState(store.containerCss);

  function handleOnChange(event) {
    setInput(event.target.value);
    store.containerCss = event.target.value;
  }

  return useObserver(() => (
    <div className="w-full bg-grey-200 p-4 relative">
      <label htmlFor="container" className="font-bold text-3xl pb-2">
        Container CSS
      </label>
      <Textarea value={input} onChange={handleOnChange} id="container" />
    </div>
  ));
}

export default ContainerCss;
