import React, { useContext, useState } from "react";
import { counterContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";

function ContainerCss() {
  const store = useContext(counterContext);
  let [input, setInput] = useState(store.containerCss);

  function handleOnChange(event) {
    setInput((input = event.target.value));
    store.containerCss = event.target.value;
  }

  return useObserver(() => (
    <div className="w-full bg-gray-nice p-4">
      <h3 className="font-bold text-3xl pb-2">Container CSS</h3>
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

export default ContainerCss;
