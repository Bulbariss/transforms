import React, { useContext, useState } from "react";
import { appContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";
import { CheckInput } from "./InputRegex";
import Input from "./Input";
import CloseButton from "./CloseButton";

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
      setBorder("border-red");
    }
  }

  return useObserver(() => (
    <div className="w-full md:w-64 rounded-xl bg-grey-200 m-2 px-4 py-3 flex flex-col items-center">
      <div className="flex justify-between items-center pb-2 w-full">
        <p className="text-lg font-bold">{store.items[index].name}</p>
        <CloseButton
          style={{ marginRight: "-6px" }}
          onClick={() => store.removeItem(id)}
          type="default"
        />
      </div>
      <Input
        className={`w-full bg-grey-50 border-2 border-grey-400 focus:border-grey-600 rounded-md ${border}`}
        type="text"
        placeholder={store.items[index].placeholder}
        value={input}
        onChange={() => handleOnChange(event)}
        onBlur={() => validateName()}
      />
      <style jsx global>{`
        .border-red {
          border-color: red !important;
        }
        input {
          vertical-align: middle;
          line-height: normal;
        }
      `}</style>
    </div>
  ));
}

export default TransformCards;
